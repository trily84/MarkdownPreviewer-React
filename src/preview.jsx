import React from "react";
let marked = require("marked");

class Preview extends React.Component {
  render() {
    marked.setOptions({
      gfm: true,
      highlight: false,
      tables: false,
      breaks: true,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      langPrefix: false
    });
    
    let markdown = this.props.text;
    return (
    <div>
    <h1 style={{textAlign: "center"}}>Preview</h1>
    <div
    id = "preview"
    dangerouslySetInnerHTML = {{__html: marked(markdown)}}
    >
    </div>
    </div>
    );
  }
}

export default Preview;