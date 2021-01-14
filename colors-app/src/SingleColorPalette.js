import React, { Component } from 'react'
import ColorBox from "./ColorBox"
import Navbar from "./Navbar"
import PaletteFooter from "./PaletteFooter"
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";


const styles = {
    palette: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
    },
    paletteColors: {
        height: '100%'
    },
    goBack: {
        width: "20%",
        height: "50%",
        margin: "0",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        opacity: 1,
        backgroundColor: "black",
        "& a": {
            width: "100px",
            height: "30px",
            position: "absolute",
            display: "inline-block",
            top: "50%",
            left: "50%",
            marginLeft: "-50px",
            marginTop: "-15px",
            textAlign: "center",
            outline: "none",
            background: "rgba(255, 255, 255, 0.3)",
            fontSize: "1rem",
            lineHeight: '30px',
            color: "white",
            textTransform: 'uppercase',
            border: 'none',
            cursor: "pointer",
            textDecoration: "none",
        }
    }
}

class SingleColorPalette extends Component {
    constructor(props){
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        this.state = { format: "hex" };
        this.changeFormat = this.changeFormat.bind(this);
    }
    gatherShades(palette, colorToFilterBy) {
        let shades = [];
        let allColors = palette.colors;
        for(let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            );
        }
        return shades.slice(1);
    }
    changeFormat(val) {
        this.setState({ format: val })
    }
    render() {
        const {format} = this.state;
        const { paletteName, emoji, id } = this.props.palette;
        const { classes } = this.props;
        const colorBoxes = this._shades.map(color => (
            <ColorBox key={color.name} name={color.name} background={color[format]} showingFullPalette={false}/>
        ));
        return (
            <div className={classes.palette}>
                <Navbar handleChange={this.changeFormat} showingAllColors={false}/> 
                <div className = {classes.paletteColors}>
                    {colorBoxes}
                    <div className={classes.goBack}>
                        <Link to={`/palette/${id}`}>GO BACK</Link>
                        </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
}

export default withStyles(styles)(SingleColorPalette);
