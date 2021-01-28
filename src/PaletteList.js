import React, { Component } from 'react'
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import styles from "./styles/PaletteList";
import { withStyles } from "@material-ui/styles";

class PaletteList extends Component {
    goToPalette(id) {
        this.props.history.push(`/palette/${id}`);
    }
    render() {
        const { palettes, classes } = this.props;
        return (            
            <div className = {classes.root}>
                <div className = {classes.container}>
                    <nav className = {classes.nav}>
                    <h1 className={classes.heading}>React Colors!!</h1>
                    <Link to="/palette/new">Create Palette</Link>
                    </nav>
                    <div className = {classes.palettes}>
                    {palettes.map(palette => (
                    <MiniPalette {...palette} 
                    handleClick={() =>this.goToPalette(palette.id)}
                    handleDelete = {this.props.deletePalette}
                    key={palette.id}
                    id = {palette.id}
                    /> 
                     ))}
                    </div>
                </div>
            </div>
        )
    }
}
export default withStyles(styles)(PaletteList);