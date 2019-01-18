import React, { Component } from "react";
import "./App.css";
import SubmitButton from "./Components/Submit";
import URLInput from "./Components/URLInput";
import Result from "./Components/Result.js";
import axios from "axios";
import { Replay } from "@material-ui/icons";
import Error from "./Components/Error";
import IconButton from "@material-ui/core/IconButton";

const axiosConfig = {
  headers: {
    "Content-Type": "application/json"
  }
};
class App extends Component {
  state = {
    url: "",
    shortResult: ""
  };
  handleChange(event) {
    this.setState({
      url: event.target.value,
      error: ""
    });
  }
  resetState() {
    this.setState({
      url: "",
      shortResult: ""
    });
  }
  onSubmit() {
    console.log("Request Sent");
    axios
      .post(
        "http://localhost:7000/api/url-shortener",
        { originalUrl: this.state.url, baseUrl: "http://localhost:7000" },
        axiosConfig
      )
      .then(res => {
        console.log(res);
        this.setState({ shortResult: res.data.shortUrl });
      })
      .catch(err => {
        this.setState({error: "Bad URL"})
      });
  }
  render() {
    return (
      <div className="App">
        <Error checked={this.state.error}/>
        {this.state.shortResult ? (
          <div className="resultgroup">     
            <Result result={this.state.shortResult} />
            <IconButton><Replay fontSize="large" onClick={this.resetState.bind(this)} /></IconButton>
          </div>
        ) : (
          <div className="inputgroup">
            <URLInput handleChange={this.handleChange.bind(this)} />
            <SubmitButton clickHandle={this.onSubmit.bind(this)} />
          </div>
        )}
      </div>
    );
  }
}

export default App;