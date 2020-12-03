import React from "react";

class Editor extends React.Component {

  render() {
    return ( 
    <div>
    <h1>Editor</h1>
    <textarea
    id = "editor" 
    onChange = {this.props.onChange}
    value = {this.props.text}
    />
    </div>
    );
  }
}

export default Editor;