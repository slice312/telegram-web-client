import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import {DialogTitle, Typography} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";


interface Props {
    open: boolean;
    close: () => void;
    closeNewGroupModal: () => void;
    openNewGroupModal: () => void;
}

export const AddMembers = ({open, close, openNewGroupModal, closeNewGroupModal}: Props) => {

    return (
        <>
            <Dialog open={open} onClose={() => {
                close();
                closeNewGroupModal();
            }}>
                <DialogTitle>
                    <Typography>Add Members 1/200000</Typography>
                    <TextField 
                        variant="standard"
                        placeholder={"Search"}
                        InputProps={{
                            startAdornment: <SearchIcon sx={{mr: "6px"}}/>
                        }} />
                </DialogTitle>
                <DialogContent>

                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        close();
                        openNewGroupModal();
                    }}>
                        Cancel
                    </Button>
                    <Button onClick={() => {
                        close();
                        closeNewGroupModal();
                    }}>
                        Next
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};