import styled from "@emotion/styled";
import { css } from "@emotion/core";
import yaml from "js-yaml";

import React, { useState, useEffect } from 'react';

const HtmlPreview = (props) => {

  const [state, setState] = useState({
    mounted: false,
    htmls: null,
    selectedHtml: "",
  });

  const fetchYamlFile =() => {
    fetch(`/data/jupyter-snippet/parsedPost.yml`)
      .then((response) => response.text())
      .then((data) => {
        console.log(`${JSON.stringify(props)}`);
        const state = yaml.load(data);
        console.log("GEtting file");
        setState({
          mounted: true,
          htmls: state,
          selectedHtml: state[props.keyid],
        });
      })
      .catch((error) => console.log(error));
  }


  useEffect(() => {
    if (document.getElementById("tweet-wjr") == null){
    const script = document.createElement("script");
    script.id = "tweet-wjr"
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = false;

    document.body.appendChild(script);
  console.log("Component Effect");
} else {
  //window.location.reload();
}
  fetchYamlFile();
}, [ fetchYamlFile ]);

  /*componenetDidUpdate(){

    console.log("Component update");
  }

  shouldComponentUpdate(nextProps, nextState){
    //console.log(`${JSON.stringify(nextProps)} ${JSON.stringify(nextState)}`);
    return true;
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return props;
  }*/

  /*componentDidMount() {
      console.log("Component mounted");
      const script = document.createElement("script");

      script.src = "https://platform.twitter.com/widgets.js";
      script.async = false;

      document.body.appendChild(script);
    console.log("Component update");
  this.fetchYamlFile();

    if (typeof window.twttr.widgets !== "undefined") {
      window.twttr.widgets.load();
      console.log("Twitter Loading");
    } else {
      console.log("Twitter Mounted");
    }
  //this.fetchYamlFile();*/
    return(
      <Injector
        className={"injector"}
        key="injector"
        dangerouslySetInnerHTML={{
          __html: state.selectedHtml,
        }}
      />);
  }

const Injector = styled.div``;

export default HtmlPreview;
