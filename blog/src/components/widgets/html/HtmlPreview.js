import styled from "@emotion/styled";
import { css } from "@emotion/core";
import yaml from "js-yaml";

import React, { Component } from 'react';

class HtmlPreview extends Component {
  constructor(props){
    super(props);
  this.state = {
    mounted: false,
    htmls: null,
    selectedHtml: "",
  };
  this.fetchYamlFile = this.fetchYamlFile.bind(this);
}

  async fetchYamlFile(){
    fetch(`/data/jupyter-snippet/${this.props.htmlid}`)
      .then((response) => response.text())
      .then((data) => {
        console.log(`${JSON.stringify(this.props)}`);
        const state = yaml.load(data);
        console.log("GEtting file");
        this.setState({
          mounted: true,
          htmls: state,
          selectedHtml: state[this.props.keyid],
        });
      })
      .catch((error) => console.log(error));
  }


  componentDidMount(){
    //if (document.getElementById("tweet-wjr") == null){
    const script = document.createElement("script");
    script.id = "tweet-wjr"
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
    console.log("Component Effect");
    if (typeof window.twttr.widgets !== "undefined") {
      window.twttr.widgets.load();
      console.log("Twitter Loading");
    } else {
      console.log("Twitter Mounted");
    }
    this.fetchYamlFile();
  //window.location.reload();
}

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
    render(){
      return(
      <Injector
        className={"injector"}
        key="injector"
        dangerouslySetInnerHTML={{
          __html: this.state.selectedHtml,
        }}
      />);
    }
  }

const Injector = styled.div``;

export default HtmlPreview;
