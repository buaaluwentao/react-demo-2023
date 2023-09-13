
import React, {Component} from 'react'

import axios from 'axios';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    content: 'hello, world'
  }
  render() {
    return (
      <div className="App">
        {this.state.content}
      </div>
    )
  }

  componentDidMount() {
    axios.get('http://localhost:3000/persons.json').then(response => {
      // console.log(response.data)
      this.setState({
        content: response.data
      })
    }).catch(error => {
      console.log(error)
    })
  }
}

export default App;
