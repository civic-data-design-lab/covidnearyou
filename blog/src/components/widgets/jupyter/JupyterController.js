import PropTypes from "prop-types";
import React, { Component } from "react";
import yaml from "js-yaml";
import containerStyles from "./styles.css";
import { css, cx } from "emotion";
import { Accordion, Label, Container, Icon } from "semantic-ui-react";
import styled from "@emotion/styled";
import theme from "../../../gatsby-plugin-theme-ui";
import {
  Input,
  Dataframe,
  NotebookStaticOverride,
  StyleZero,
  Highlights,
} from "./notebook";

export default class JupyterController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSnippet: "",
      colorMode: true,
      colorState: lightMode,
      activeIndex: 0,
      theme: {
        input_prompt: "#000000", //"#303F9F",
        header: "#000000",
      },
    };
    this.handleClick = this.handleClick.bind(this);
    this.mutateState = this.mutateState.bind(this);
    this.onLog = this.onLog.bind(this);
    this.fetchYamlFile = this.fetchYamlFile.bind(this);
  }

  onLog(e) {
    console.log(e.data);
  }

  async fetchYamlFile() {
    fetch(`/data/jupyter-snippet/${this.props.path}`)
      .then((response) => response.text())
      .then((data) => {
        const snippets = yaml.load(data);
        this.setState({ selectedSnippet: snippets[`${this.props.snippet}`] });
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    console.log("Add listener");
    console.log(Object.keys(window.localStorage));
    this.setState({
      colorMode: true
        ? "light" !==
          window.localStorage.getItem("theme-ui-color-mode", "light")
        : false,
    });
    this.fetchYamlFile();
    //  window.addEventListener('keyup', this.onLog);
    window.addEventListener("message", this.mutateState);
    this.fetchYamlFile();
  }

  componentWillUnmount() {
    console.log("Remove listener");
    //  window.removeEventListener('keyup', this.onLog);
    window.removeEventListener("message", this.mutateState);
  }

  componenetDidUpdate(oldProp, newProp) {
    console.log("Update");
  }

  handleClick(e, titleProps) {
    const { index } = titleProps;
    const activeIndex = this.state.activeIndex;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  }

  mutateState(e) {
    console.log(`[MUTATING]`);
    try {if ("theme" in e.data) {
      const mode = e.data.theme;
      console.log(`[MUTATING]: ${mode}`);
      if (mode === "light") {
        this.setState({
          colorMode: false,
          colorState: selectMode("rgba(0, 0, 0, 0.2)"),
          theme: {
            input_prompt: "#000000", //"#303F9F",
            header: "#000000",
          },
        });
      } else {
        this.setState({
          colorMode: true,
          colorState: selectMode("rgba(255, 255, 255, 0.2)"),
          theme: {
            input_prompt: "#FFFFFF",
            header: "#FFFFFF",
          },
        });
      }
    }
  } catch(e){
    console.log(e);
  }
  }

  render() {
    return (
      <div key="diev" className={this.state.colorState}>
        <Body className={"jupyter"} borderColor={this.state.theme}>
          <Accordion fluid inverted={this.state.colorMode}>
            <Accordion.Title
              active={this.state.activeIndex === 0}
              index={0}
              onClick={this.handleClick}
            >
              <Container>
                <Icon name="dropdown" />
                {this.props.label + " " + this.state.colorMode}
              </Container>
            </Accordion.Title>
            <Accordion.Content active={this.state.activeIndex === 0}>
              <Test
                backgroundColor={"hotpink"}
                color={this.state.theme}
                dangerouslySetInnerHTML={{
                  __html: this.state.selectedSnippet,
                }}
              ></Test>
            </Accordion.Content>
          </Accordion>
        </Body>
      </div>
    );
  }
}

const Body = styled.div(
  {
    border: "1px solid",
    height: "auto",
    width: "100%",
    padding: "4px 12px 12px 4px",
    borderRadius: "4px",
  },
  (props) => ({ borderColor: props.borderColor.header })
);

const Test = styled.div(
  Dataframe,
  NotebookStaticOverride,
  Highlights,
  (props) => Input(props),
  StyleZero
);

const BodyCSS = css`
  /* Hello */
  width: 100%;
  height: 300px;
`;

const AccordionCSS = (p) => css`
  border: 1px solid;
  padding: 10px;
  border-radius: 10px;
  /* offset-x | offset-y | blur-radius | spread-radius | color */
  /*box-shadow: 1px 1px 4px 1px rgba(255, 255, 255, 0.2);*/
`;

const darkMode = css`
  border: 1px solid;
  padding: 10px;
  border-radius: 4px;
  border-color: white;
`;

const lightMode = css`
  border: 1px solid black;
  padding: 2px;
  border-radius: 4px;
`;

const selectMode = (p) => css`
  border: 1px solid red;
  height: auto;
  width: 100%;
  padding: 2px;
  border-radius: 4px;
  &:hover {
    color: black;
  }
`;

/*JupyterController.propTypes = {
  path: PropTypes.string,
  snippet: PropTypes.string,
  lable: PropTypes.string,
};*/
