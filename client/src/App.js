import React, { Component } from 'react';
import './App.css';
import SubmitButton from'./Components/Submit';
import URLInput from './Components/URLInput';
import ResultModal from './Components/ResultModal.js';
import axios from 'axios';
import { Replay } from '@material-ui/icons';
let axiosConfig = {
  headers: {
      'Content-Type': 'application/json',
  }
};
class App extends Component {
  state = {
    url: '',
    shortResult: ''
  }
  handleChange = event => {
    console.log(this.state);
    this.setState({
      url: event.target.value
    })
  }
  resetState() {
    this.setState({
      url: '',
      shortResult: ''
    })
  }
  onSubmit() {
    console.log('Request Sent');
    axios.post('http://localhost:7000/api/url-shortener', { originalUrl: this.state.url, baseUrl: "http://localhost:7000" }, axiosConfig)
      .then((res) => {
        console.log(res.data.shortUrl);
        this.setState({ shortResult: res.data.shortUrl })
      }).catch((err) => { console.log(err) });
  }
  render() {
    return (
      <div className="App">
        <Replay onClick={this.resetState.bind(this)}/>
        {this.state.shortResult ? <ResultModal result={this.state.shortResult}/>
        :
        <div>
          <URLInput handleChange={this.handleChange.bind(this)}/>
          <SubmitButton clickHandle={this.onSubmit.bind(this)}/>
        </div>}
      </div>
    );
  }
}

export default App
