import React, { Component } from 'react';
import Editor from "./editor";
import Preview from "./preview";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>

class App extends React.Component {
 state = {
      inputValue: `
# h1

## h2

[my portfolio](http://treehausllc.com)

<dl>
  <dt>Definition List</dt>  
  <dd>Something</dd>
  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>  

- code
- all
- day

> just learning

**bold text**

*italic text*

![mario](https://pm1.narvii.com/7280/99faa236aafd49c34f011f56f728a36439e72126r1-256-256v2_hq.jpg)

\`This is an example of inline code\`

\`\`\`
function exampleOf() {
  return multilineCodeBlock;
}
\`\`\`

---
      `
    };

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  render() {
    console.log(this.state)
    return (
      <div className = "grid-container">
        <div className = "row">
          <div className = "col text-center">
            <h1 id = "Title">Markdown Previewer</h1>
          </div>
        </div>
        <div className = "row">
          <div className = "col-md-6">
            <Editor className = "App"
            onChange = {this.handleChange}
            text = {this.state.inputValue}
            />
          </div>
          <div className = "col-md-6">
            <Preview
            text = {this.state.inputValue}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
