import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
});
class Submit extends Component {
    render() {
        const { classes } = this.props;
        return <Button size='large' fullWidth={true} variant='text' onClick={this.props.clickHandle} color='primary' className={classes.button}> MiNiFy </Button>
    }
}


export default withStyles(styles)(Submit)