import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    return (
      <div>
        <span>This is a good testing</span>
      </div>
    );
  }
}

export default App;