import React, { Component } from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import axios from 'axios';
const styles = theme => ({
  button : {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    flexBasis: 200,
    width: 500,
    height: 45
  }
});
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
  onSubmit() {
    console.log('Request Sent');
    axios.post('http://localhost:7000/api/url-shortener', { originalUrl: this.state.url, baseUrl: "http://localhost:7000" }, axiosConfig)
      .then((res) => {
        console.log(res.data.shortUrl);
        this.setState({ shortResult: res.data.shortUrl })
      }).catch((err) => { console.log(err) });
  }
  render() {
    const inputProps = {
      steps: 300,
    }
    const { classes } = this.props;
    return (
      <div className="App">
        <TextField id="urlInput" onChange={this.handleChange} className={classNames(classes.margin, classes.textField)}type="url" variant="outlined" inputProps={inputProps} />
        <Button variant='contained' onClick={this.onSubmit.bind(this)} color='primary' className={classes.button}> Minify Me! </Button>
        { this.state.shortResult ? <a href={this.state.shortResult}> {this.state.shortResult} </a> : null }
      </div>
    );
  }
}

export default withStyles(styles)(App)
