import React from "react";
import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import IframePreview from "../components/widgets/iframe/IframePreview";
import JupyterPreview from "../components/widgets/jupyter/JupyterPreview";

//CMS.registerMediaLibrary(uploadcare);

//CMS.registerWidget([IframeCMSWidget.Widget()]);

CMS.registerEditorComponent({
  id: "iframe",
  label: "Iframe Tag",
  fields: [
    { name: "id", label: "Embed Link", widget: "string" },
    { name: "title", label: "Title", widget: "string" },
    { name: "allow", label: "Allow", widget: "string" },
    { name: "src", label: "Source", widget: "string" },
  ],
  pattern: /^<iframe (\S+)$/,
  fromBlock: function(match) {
    return {
      id: match[0].split("=")[1],
      title: match[1].split("=")[1],
      allow: match[2].split("=")[1],
      src: match[3].split("=")[1],
    };
  },
  toBlock: function(obj) {
    return (
      '<iframe id="' +
      obj.id +
      '" title="' +
      obj.title +
      '" allow="' +
      obj.allow +
      '" src="' +
      obj.src +
      '" />'
    );
  },
  toPreview: function(obj) {
    return <IframePreview obj />;
  },
});

CMS.registerEditorComponent({
  id: "jupyter",
  label: "Jupyter Frame",
  fields: [
    { name: "path", label: "File Path", widget: "string" },
    { name: "snippet", label: "Snippet", widget: "string" },
    { name: "label", label: "Snippet Label", widget: "string" },
  ],
  pattern: /^<jupyter (\S+)$/,
  fromBlock: function(match) {
    return {
      path: match[0].split("=")[1],
      snippet: match[1].split("=")[1],
      label: match[2].split("=")[1],
    };
  },
  toBlock: function(obj) {
    return `<jupyter path="${obj.path}" snippet="${obj.snippet}" label="${obj.label}" />`;
  },
  toPreview: function(obj) {
    return <JupyterPreview obj />;
  },
});
