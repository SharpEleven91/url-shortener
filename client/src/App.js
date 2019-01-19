import React, { Component } from "react";
import "./App.css";
import Result from "./Components/Result.js";
import axios from "axios";
import Error from "./Components/Error";
import Logo from "./Components/Logo";
import InputForm from "./Components/InputForm";
import Footer from "./Components/Footer";
const axiosConfig = {
  headers: {
    "Content-Type": "application/json"
  }
};
const baseUrl = "https://umini.herokuapp.com";
class App extends Component {
  state = {
    url: "",
    result: ""
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
      result: ""
    });
  }
  onSubmit() {
    axios
      .post(
        "/api/url-shortener",
        { originalUrl: this.state.url, baseUrl: baseUrl },
        axiosConfig
      )
      .then(res => {
        this.setState({ result: res.data.shortUrl });
      })
      .catch(err => {
        this.setState({ error: "Bad URL" });
      });
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.onSubmit();
    }
  }
  render() {
    return (
      <div className="App">
        <Logo />
        <Error checked={this.state.error ? true : false} />
        {this.state.result ? (
          <Result
            result={this.state.result}
            reset={this.resetState.bind(this)}
          />
        ) : (
          <InputForm
            onSubmit={this.onSubmit.bind(this)}
            handleKeyPress={this.handleKeyPress.bind(this)}
            handleChange={this.handleChange.bind(this)}
          />
        )}
        <>
        <Footer/>
        </>
      </div>
      
    );
  }
}

export default App;
