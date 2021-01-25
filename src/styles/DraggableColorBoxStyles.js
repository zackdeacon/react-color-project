const styles = { 
    root: {
        width: "20%",
        height: "25%",
        margin: "0",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        "&:hover svg": {
            color: "white",
            transform: "scale(1.5)"
        }
    },
    boxContent : {
        position: 'absolute',
        padding: '10px',
        width: '100%',
        left: '0%',
        bottom: '0px',
        padding: '10px',
        color: 'black',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px',
        display: "flex",
        justifyContent: "space-between"
    },
    deleteIcon: {
        color: "black",
        transition: "all 0.3s ease-in-out"
    }
}

export default styles;