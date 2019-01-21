import React, { useState } from "react";
import "../App.css";
import Result from "./Result.js";
import axios from "axios";
import Error from "./Error";
import Logo from "./Logo";
import InputForm from "./InputForm";
import Footer from "./Footer";
const axiosConfig = {
  headers: {
    "Content-Type": "application/json"
  }
};
const baseUrl = "https://umini.herokuapp.com";
export default function URLMinify() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  function handleChange(event) {
    if (error) {
        setError('');
    }
    setUrl(event.target.value);
  }
  function resetState() {
    setUrl('');
    setResult('');
  }
  function onSubmit() {
    axios
      .post(
        "/api/url-shortener",
        { originalUrl: url, baseUrl: baseUrl },
        axiosConfig
      )
      .then(res => {
        setResult(res.data.shortUrl);
      })
      .catch(err => {
        setError('Bad URL');
      });
  }
  function handleKeyPress(event) {
    if (event.keyCode === 13) {
        onSubmit();
    }
  }
    return (
      <div className="App">
        <Logo />
        <Error checked={error ? true : false} />
        {result ? (
          <Result
            result={result}
            reset={resetState}
          />
        ) : (
          <InputForm
            onSubmit={onSubmit}
            handleKeyPress={handleKeyPress}
            handleChange={handleChange}
          />
        )}
        <>
        <Footer/>
        </>
      </div>
      
    );
}
