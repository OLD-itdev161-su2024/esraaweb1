import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {

  state = 
  {
    data: null
  };

  componentDidMount(): void
  {
    axios.get("http://localhost:10161/")
      .then((response) => 
        this.setState({
          data: response.data
        })
      )
      .catch((error) => 
        console.error(`Error fetching data: ${error}`)
      );
  }

  render(): React.ReactNode
  {
    return (
      <div className="App">
        <header className="App-header">
          GoodThings
        </header>
        {this.state.data}
      </div>
    );
  }
}

export default App;
