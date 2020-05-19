import React, { Component } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import yaml from "js-yaml";

class HtmlPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      htmls: null,
      selectedHtml: "",
    };
    this.fetchYamlFile = this.fetchYamlFile.bind(this);
  }

  async fetchYamlFile() {
    fetch(`/data/jupyter-snippet/parsedPost.yml`)
      .then((response) => response.text())
      .then((data) => {
        console.log(`${JSON.stringify(this.props)}`);
        const state = yaml.load(data);
        this.setState({
          htmls: state,
          selectedHtml: state[this.props.key_],
        });
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.fetchYamlFile();
    if (typeof window.twttr.widgets !== "undefined") {
      window.twttr.widgets.load();
      console.log("Twitter Loading");
    } else {
      console.log("Twitter Mounted");
    }
    const script = document.createElement("script");

    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
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
