import React from "react";
import './App.css';

class Editor extends React.Component {

  render() {
    return ( 
    <div>
    <h1 style={{textAlign: "center"}}>Editor</h1>
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