import React, { Component } from 'react';
import './App.css';
import Information from './components/Information';

class App extends Component {
  state = {
    title: 'React crud Operaction',
  };
  changeTitle = () => {
    this.setState((prevState, props) => {
      return {
        title: 'hello',
      };
    });
  };
  onMouseReaches = () => {
    alert('mouse entered');
  };
  onChangevalue = event => {
    console.log(event.target.value);
  };

  focusText = () => {
    this.textInput.focus();
  };

  render() {
    return (
      <div className="App">
        {this.state.title}
        <br />
        <button onClick={this.changeTitle}>Change State</button>
        <Information
          title={2}
          details="This is a very very dummy component"
          changeText={this.changeTitle}
          justAlert={this.onMouseReaches}
        />
      </div>
    );
  }
}

export default App;
