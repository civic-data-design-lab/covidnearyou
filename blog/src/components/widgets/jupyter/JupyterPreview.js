import PropTypes from "prop-types";
import React, { useReducer, useState, useEffect } from "react";
import yaml from "js-yaml";
import containerStyles from "./styles.css";
import { css, cx } from "emotion";
import { Accordion, Label, Container, Icon } from "semantic-ui-react";
import styled from "@emotion/styled";
import theme from "../../../gatsby-plugin-theme-ui";

const initialState = {
  selectedSnippet: "",
  colorMode: true
    ? "light" !== window.localStorage.getItem("theme-ui-color-mode", "light")
    : false,
  colorState: lightMode,
};

function reducer(state, action) {
  const { selectedSnippet, colorMode, colorState } = state;
  if (action.type === "SET_STATE") {
    return Object.assign({}, state, action.data);
  } else if (action.type === "SNIPPET") {
    return Object.assign({}, state, action.data);
  } else if (action.type === "COLOR_MODE") {
    return state;
  } else if (action.type === "COLOR_STATE") {
    return state;
  } else {
    throw new Error();
  }
}

function JupyterPreviewWrapper(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function mutateState() {
    console.log("Mutating");
    console.log(window.localStorage.getItem("theme-ui-color-mode"));
    const mode = window.localStorage.getItem("theme-ui-color-mode", "light");
    if (mode === "light") {
      dispatch({
        type: "SET_STATE",
        data: {
          colorMode: false,
          colorState: selectMode("rgba(0, 0, 0, 0.2)"),
        },
      });
    } else {
      dispatch({
        type: "SET_STATE",
        data: {
          colorMode: true,
          colorState: selectMode("rgba(255, 255, 255, 0.2)"),
        },
      });
    }
  }

  //const [store, setStore] = useLocalStorage("theme-ui-color-mode", "dark");
  useEffect(() => {
    window.addEventListener("storage", mutateState);
    return () => window.removeEventListener("storage", mutateState);
  }, [dispatch]);

  /*useEffect(() => {
    fetch(`/data/jupyter-snippet/${props.path}`)
      .then((response) => response.text())
      .then((data) => {
        const snippets = yaml.load(data);
        dispatch({
          type: "SNIPPET",
          data: { selectedSnippet: snippets[`${props.snippet}`] },
        });
      })
      .catch((error) => console.log(error));
  }, []);*/
  return <JuptyerPreview state={state} {...props} />;
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

export default function JuptyerPreview({ label }) {
  const [accordionState, setAccordionState] = useState({ activeIndex: 0 });

  const [state, dispatch] = useReducer(reducer, initialState);

  function mutateState() {
    console.log("Mutating");
    console.log(window.localStorage.getItem("theme-ui-color-mode"));
    const mode = window.localStorage.getItem("theme-ui-color-mode", "light");
    if (mode === "light") {
      dispatch({
        type: "SET_STATE",
        data: {
          colorMode: false,
          colorState: selectMode("rgba(0, 0, 0, 0.2)"),
        },
      });
    } else {
      dispatch({
        type: "SET_STATE",
        data: {
          colorMode: true,
          colorState: selectMode("rgba(255, 255, 255, 0.2)"),
        },
      });
    }
  }

  //const [store, setStore] = useLocalStorage("theme-ui-color-mode", "dark");
  useEffect(() => {
    window.addEventListener("storage", mutateState);
    return () => window.removeEventListener("storage", mutateState);
  }, [dispatch]);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = accordionState;
    const newIndex = activeIndex === index ? -1 : index;
    setAccordionState({ activeIndex: newIndex });
  };

  const colorSelector = (cm) => ("black" ? cm === "dark" : "white");

  return (
    <Body className={"jupyter"}>
      <Accordion fluid inverted={state.colorMode}>
        <Accordion.Title
          active={accordionState.activeIndex === 0}
          index={0}
          onClick={handleClick}
        >
          <Container>
            <Icon name="dropdown" />
            {label}
          </Container>
        </Accordion.Title>
        <Accordion.Content active={accordionState.activeIndex === 0}>
          <div
            className={containerStyles}
            dangerouslySetInnerHTML={{
              __html: state.selectedSnippet,
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
  padding: 2px;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.2);
`;

const selectMode = (p) => css`
  border: 1px solid red;
  padding: 2px;
  color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  &:hover {
    color: black;
  }
`;

JuptyerPreview.propTypes = {
  path: PropTypes.string,
  snippet: PropTypes.string,
  lable: PropTypes.string,
};
