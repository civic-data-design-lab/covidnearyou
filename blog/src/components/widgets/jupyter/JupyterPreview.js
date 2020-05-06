import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import yaml from "js-yaml";
import containerStyles from "./styles.css";
import { css } from "@emotion/core";
import { Accordion, Container, Icon } from "semantic-ui-react";
import styled from "@emotion/styled";
import theme from "../../../gatsby-plugin-theme-ui";

export default function JupyterPreviewWrapper(props) {
  const [snippet, setSnippetState] = useState("");
  const [colorMode, setColorMode] = useState(
    window.localStorage.getItem("theme-ui-color-mode", "light")
  );
  const [colorState, setColorState] = useState(lightMode);
  //const [store, setStore] = useLocalStorage("theme-ui-color-mode", "dark");

  window.addEventListener("storage", (e) => {
    e.preventDefault();
    console.log(window.localStorage.getItem("theme-ui-color-mode"));
    let mode = window.localStorage.getItem("theme-ui-color-mode", "light");

    setColorMode(mode);
    if (mode === "light") {
      setColorState(selectMode("black"));
    } else {
      setColorState(selectMode("white"));
    }
  });

  useEffect(() => {
    fetch(`/data/jupyter-snippet/${props.path}`)
      .then((response) => response.text())
      .then((data) => {
        const snippets = yaml.load(data);
        return setSnippetState(snippets[`${props.snippet}`]);
      })
      .catch((error) => console.log(error));
  });
  return (
    <JuptyerPreview
      selectedSnippet={snippet}
      colorMode={colorMode}
      colorState={colorState}
      {...props}
    />
  );
}

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoreValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      console.log(item);
      return item ? item : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoreValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

function JuptyerPreview({
  selectedSnippet,
  snippet,
  label,
  colorMode,
  colorState,
}) {
  const [accordionState, setAccordionState] = useState({ activeIndex: 0 });

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = accordionState;
    const newIndex = activeIndex === index ? -1 : index;
    setAccordionState({ activeIndex: newIndex });
  };

  const colorSelector = (cm) => ("black" ? cm === "dark" : "white");

  return (
    <Body className={"jupyter"}>
      <Accordion
        css={colorState}
        fluid
        inverted={true ? colorMode === "dark" : false}
      >
        <Accordion.Title
          active={accordionState.activeIndex === 0}
          index={0}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          {label}
        </Accordion.Title>
        <Accordion.Content active={accordionState.activeIndex === 0}>
          <div
            className={containerStyles}
            dangerouslySetInnerHTML={{
              __html: selectedSnippet,
            }}
          ></div>
        </Accordion.Content>
      </Accordion>
    </Body>
  );
}

const Body = styled.div``;
const BodyCSS = (p) => css`
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
  padding: 10px;
  border-radius: 4px;
`;

const selectMode = (p) => css`
  border: 1px solid ${p};
  padding: 10px;
  border-radius: 4px;
`;

JuptyerPreview.propTypes = {
  path: PropTypes.string,
  snippet: PropTypes.string,
  lable: PropTypes.string,
};
