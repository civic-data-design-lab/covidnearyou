import PropTypes from "prop-types";
import React from "react";

export default function IframePreview({ id, title, allow, src }) {
  return (
    <iframe
      title={title}
      key="iframe"
      src={id}
      width="100%"
      height="375"
      allow={allow}
    />
  );
}

IframePreview.protoTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  allow: PropTypes.string,
};
