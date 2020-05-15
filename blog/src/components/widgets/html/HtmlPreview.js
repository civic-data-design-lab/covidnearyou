import React from "react";

export default ({ html }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: props.html,
      }}
    >
      {" "}
    </div>
  );
};
