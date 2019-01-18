import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Fade from '@material-ui/core/Fade'
const styles = theme => ({
  input: {
    display: "none"
  },
  margin: {
    margin: theme.spacing.unit
  },
  textField: {
    flexBasis: 200,
    width: 500,
    height: 45
  }
});
class Error extends Component {
    render() {
        const { classes } = this.props;
        return (
          <Fade in={this.props.checked} timeout={{enter: 1700, exit: 1700}}>
            <Typography color="error" className={classes} component="h3" variant="h3" gutterBottom> Invalid URL </Typography>
          </Fade>
        )
  }
}

export default withStyles(styles)(Error);