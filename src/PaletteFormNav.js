import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PaletteMetaForm from "./PaletteMetaForm";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Button } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/PaletteFormNavStyles";

class PaletteFormNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPaletteName: "",
            formShowing : false
        }
        this.handleChange = this.handleChange.bind(this);
        this.showForm = this.showForm.bind(this);
        this.hideForm = this.hideForm.bind(this);
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    showForm() {
        this.setState({ formShowing : true })
    }
    hideForm() {
        this.setState({
            formShowing: false
        })
    }
    render() {
        const { classes, open, palettes, handleSubmit } = this.props;
        const { newPaletteName } = this.state;
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position='fixed'
                    color="default"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open
                    })}>
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color='inherit'
                            aria-label='Open drawer'
                            onClick={this.props.handleDrawerOpen}
                            className={classNames(classes.menuButton, open && classes.hide)}>
                            <ChevronRightIcon />
                        </IconButton>
                        <Typography variant='h6' color='inherit' noWrap>
                            Create a Palette
                </Typography>
                    </Toolbar>
                    <div className={classes.navBtns}>
                        <Link to="/">
                            <Button
                            className = {classes.button}
                                variant="contained"
                                color="secondary">
                                Go Back
                                    </Button>
                        </Link>
                        <Button 
                        variant="contained" 
                        className = {classes.button}
                        color="primary" 
                        onClick={this.showForm}>
                    Save
            </Button>
                    </div>
                </AppBar>
                {this.state.formShowing && <PaletteMetaForm palettes = {palettes} handleSubmit = {handleSubmit} hideForm={this.hideForm}/>}
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
