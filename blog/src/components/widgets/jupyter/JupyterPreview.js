import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import yaml from "js-yaml";
import containerStyles from "./styles.css";
import { css } from "@emotion/core";
import { Accordion, Container, Icon } from "semantic-ui-react";

export default function JupyterPreviewWrapper(props) {
  const [snippet, setSnippetState] = useState("");

  useEffect(() => {
    fetch(`/data/jupter-snippet/${props.path}`)
      .then((response) => response.text())
      .then((data) => {
        const snippets = yaml.load(data);
        return setSnippetState(snippets[`${props.snippet}`]);
      })
      .catch((error) => console.log(error));
  });
  return <JuptyerPreview selectedSnippet={snippet} {...props} />;
}

function JuptyerPreview({ selectedSnippet, snippet, label }) {
  const [accordionState, setAccordionState] = useState({ activeIndex: 0 });
  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = accordionState;
    const newIndex = activeIndex === index ? -1 : index;
    setAccordionState({ activeIndex: newIndex });
  };

  return (
    <Container className={"jupyter"}>
      <Accordion fluid styled>
        <Accordion.Title
          active={accordionState.activeIndex === 0}
          index={0}
          onClick={handleClick}
        >
          <Icon name="dropdown" />
          {label}
        </Accordion.Title>
        <Accordion.Content active={accordionState.active === 0}>
          <div
            className={containerStyles}
            dangerouslySetInnerHTML={{
              __html: selectedSnippet,
            }}
          ></div>
        </Accordion.Content>
      </Accordion>
    </Container>
  );
}

JuptyerPreview.propTypes = {
  path: PropTypes.string,
  snippet: PropTypes.string,
  lable: PropTypes.string,
};
