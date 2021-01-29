import sizes from "./Sizes";
import bg from "./bg.svg";

export default {
    "@global": {
        ".fade-exit": {
            opacity: 1
        },
        ".fade-exit-active": {
            opacity: 0,
            transition: "opacity 500ms ease-out"
        }
    },
    root: {
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "#f6b906",
        /* background by SVGBackgrounds.com */
        backgroundImage: `url(${bg})`,
        overflow: "scroll"
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [sizes.down("xl")]:{
            width: "80%"
        },
        [sizes.down("xs")]:{
            width: "75%"
        }

    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        color: "black",
        "& a": {
            color: "#2e4357",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1rem",
            [sizes.down("xs")]:{
            fontSize: "small"
            }
        
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "2.5rem",
        [sizes.down("md")]:{
        gridTemplateColumns: "repeat(2, 50%)",
    
        },    
        [sizes.down("xs")]:{
        gridTemplateColumns: "repeat(1, 100%)",
        gridGap: "1.4rem"
        }

    },
    heading: {
        fontSize: "2rem"
    },
    createBtn: {
        backgroundColor: "#68e518",
        border: "1px solid #3e9407",
        "&:hover": {
            backgroundColor: "#599a2f"
        },
        [sizes.down("xs")]:{
        height: "2.5rem",
        width: "3rem"
        }
    
    }
};