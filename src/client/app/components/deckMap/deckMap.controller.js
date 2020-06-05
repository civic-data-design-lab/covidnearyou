import { Deck } from "@deck.gl/core";
import { GeoJsonLayer, ArcLayer } from "@deck.gl/layers";
import mapboxgl from "mapbox-gl";
import MapStyleActions from "../../actions/map-style-actions";
import * as d3 from "d3";

class DeckMapController {
  constructor(mapbox_api, $ngRedux, $scope) {
    this.mapbox_api = mapbox_api;
    var controllerCtx = this;
    //document.getElementById("key").innerText = this.mapbox_api;
    this.unsubscribe = $ngRedux.connect(this.mapStateToThis, {
      MapStyleActions,
    })(this);

    console.log($scope);

    const INITIAL_VIEW_STATE = $scope.$ctrl.mapState;
    const TELCO_DATA = "./data/segmentaa.csv";

    mapboxgl.accessToken = this.mapbox_api;

    this.map = null;
    this.deck = null;

    console.log(TELCO_DATA);
    d3.csv(TELCO_DATA, function (d) {
      return {
        source: +d.source,
        target: +d.target,
        transitions: +d["total_transitions"],
        source_lat: +d["source_lat"],
        source_lon: +d["source_lon"],
        target_lat: +d["target_lat"],
        target_lon: +d["target_lon"],
      };
    }).then(function (data) {
      var c_data = data.filter((i) => i.source_lon != 0 || i.target_lon != 0);
      controllerCtx._renderMap($scope, INITIAL_VIEW_STATE, c_data);
    });

    //this._renderMap($scope, INITIAL_VIEW_STATE, null);
  }

  _renderMap($scope, INITIAL_VIEW_STATE, telco) {
    //console.log(JSON.stringify(telco));
    const AIR_PORTS =
      "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson";

    this.map = new mapboxgl.Map({
      container: "map",
      style: $scope.$ctrl.mapStyle.mapStyles.dark.url, //"mapbox://styles/mapbox/light-v9",
      // Note: deck.gl will be in charge of interaction and event handling
      interactive: false,
      center: [INITIAL_VIEW_STATE.longitude, INITIAL_VIEW_STATE.latitude],
      zoom: INITIAL_VIEW_STATE.zoom,
      bearing: INITIAL_VIEW_STATE.bearing,
      pitch: INITIAL_VIEW_STATE.pitch,
    });
    this.deck = new Deck({
      canvas: "deck-canvas",
      width: "100%",
      height: "100%",
      initialViewState: INITIAL_VIEW_STATE,
      controller: true,
      onViewStateChange: ({ viewState }) => {
        this.map.jumpTo({
          center: [viewState.longitude, viewState.latitude],
          zoom: viewState.zoom,
          //bearing: viewState.bearing,
          //pitch: viewState.pitch,
        });
      },
      layers: [
        /*new GeoJsonLayer({
          id: "airports",
          data: AIR_PORTS,
          // Styles
          filled: true,
          pointRadiusMinPixels: 2,
          pointRadiusScale: 2000,
          getRadius: (f) => 11 - f.properties.scalerank,
          getFillColor: [200, 0, 80, 180],
          // Interactive props
          pickable: true,
          autoHighlight: true,
          onClick: (info) =>
            // eslint-disable-next-line
            info.object &&
            alert(
              `${info.object.properties.name} (${info.object.properties.abbrev})`
            ),
        }),
        new ArcLayer({
          id: "arcs",
          data: AIR_PORTS,
          dataTransform: (d) =>
            d.features.filter((f) => f.properties.scalerank < 4),
          // Styles
          getSourcePosition: (f) => [-0.4531566, 51.4709959], // London
          getTargetPosition: (f) => f.geometry.coordinates,
          getSourceColor: [0, 128, 200],
          getTargetColor: [200, 0, 80],
          getWidth: 1,
        }),*/
        new ArcLayer({
          id: "towers",
          //pickable: true,
          data: telco,
          //dataTransform: (d) =>
          //d.filter((i) => i.source_lat !== null && i.target_lat !== null),
          onHover: ({ object, x, y }) => {
            const toolTip = `${object.source} to ${object.target}`;
          },
          getSourcePosition: (f) => [f.source_lon, f.source_lat],

          getTargetPosition: (f) => [f.target_lon, f.target_lat],
          getSourceColor: [0, 128, 200],
          getTargetColor: [200, 0, 80],
          getWidth: 1,
        }),
      ],
    });
  }

  $onDestroy() {
    this.unsubscribe();
  }
  mapStateToThis(state) {
    //console.log(state);
    return { mapStyle: state.mapStyle, mapState: state.mapState };
  }
}

DeckMapController.$inject = ["mapbox_api", "$ngRedux", "$scope"];
export default DeckMapController;
