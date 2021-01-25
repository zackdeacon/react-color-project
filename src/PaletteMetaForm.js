import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from "emoji-mart";
import 'emoji-mart/css/emoji-mart.css';


class PaletteMetaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stage: "form",
            newPaletteName: ""
        }
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.showEmojiPicker = this.showEmojiPicker.bind(this);
        this.savePalette = this.savePalette.bind(this);
    }
    componentDidMount() {
        ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
            this.props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
    }
    handleClickOpen() {
        this.setState({ open: true });
    }
    handleClose() {
        this.setState({ open: false });
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    showEmojiPicker() {
        this.setState({
            stage: "emoji"
        })
    }
    savePalette(emoji) {
        const pickedEmoji = emoji.native;
        const newPalette= {
            paletteName: this.state.newPaletteName, 
            emoji: pickedEmoji
        };
        this.props.handleSubmit(newPalette)
    }
    render() {
        const { open, newPaletteName } = this.state;
        const { hideForm, handleSubmit } = this.props; 
        return (
            <div>
            <Dialog open={this.state.stage === "emoji"} onClose={hideForm}>
            <DialogTitle id="form-dialog-title">Choose a palette emoji!</DialogTitle>
                <Picker onSelect={this.savePalette} title="Please choose a Palette Emoji"/>
            </Dialog>
                <Dialog open={this.state.stage === "form"} onClose={hideForm} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Choose a palette name!</DialogTitle>
                    <ValidatorForm
                            onSubmit={this.showEmojiPicker}>
                    <DialogContent>
                        <DialogContentText>
                            Please enter a name for your new color palette!! Make sure its a unique name. 
                </DialogContentText>
                            <TextValidator
                                value={newPaletteName}
                                label="palette Name"
                                name="newPaletteName"
                                onChange={this.handleChange}
                                fullWidth
                                margin = "normal"
                                validators={["required", "isPaletteNameUnique"]}
                                errorMessage={["Enter A Palette Name", "Name Already Used"]}
                            />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={hideForm} color="primary">
                            Cancel
                </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit">
                            Save Palette
                            </Button>
                    </DialogActions>
                    </ValidatorForm>
                </Dialog>
            </div>
        )
    }
}

export default PaletteMetaForm;
