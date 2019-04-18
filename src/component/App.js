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

  showAlert(){
    alert("This is a new alert");
  }

  render() {
    return (
      <div>
        <span>This is a good testing</span>
        <button onClick={this.showAlert}>Show alert</button>
      </div>
    );
  }
}

export default App;