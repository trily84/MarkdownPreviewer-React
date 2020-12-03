import React, { Component } from 'react';
import Editor from "./editor";
import Preview from "./preview";
<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>


class App extends React.Component {
 state = {
      inputValue: `
# h1

## h2

[my portoflio](http://treehausllc.com)

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

![image](http://treehausllc.com/projects/6thandgrove.html)

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
      <React.Fragment>
        <Editor
        onChange = {this.handleChange}
        text = {this.state.inputValue}
        />
        <Preview
        text = {this.state.inputValue}
        />
      </React.Fragment>
    );
  }
}

export default App;
