import PropTypes from "prop-types";
import React from "react";

export default function IframePreview({
  id,
  title,
  allow,
  width,
  height,
  src,
}) {
  return (
    <iframe
      title={title}
      key="iframe"
      src={src}
      width={width}
      height={height}
      allow={allow}
    />
  );
}

IframePreview.protoTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  allow: PropTypes.string,
};
