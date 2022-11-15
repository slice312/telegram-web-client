import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import {Avatar, IconButton, ListItemAvatar, ListItemButton, ListItemText, Typography} from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import {PhotoCamera} from "@mui/icons-material";
import styled from "@emotion/styled";
import {AddMembers} from "@/components/menu/newGroup/AddMembers";
import {useState} from "react";


export const NewGroup = () => {
    const [open, setOpen] = React.useState<boolean>(false);
    const [addMembersOpened, setAddMembersOpened] = useState<boolean>(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddMembersOpen = () => {
        setAddMembersOpened(true);
    };

    const handleAddMembersClose = () => {
        setAddMembersOpened(false);
    };

    const Content = styled.div(({theme}) => `
        display: flex;
        align-items: center;
        gap: 20px;
    `);

    return (
        <>
            <ListItemButton onClick={handleClickOpen}>
                <ListItemAvatar>
                    <Avatar
                        sx={{bgcolor: "#2196f3", width: 36, height: 36}}
                        variant={"rounded"}>

                        <GroupIcon sx={{color: "white"}}/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText>
                    <Typography fontSize={18}>
                        New Group
                    </Typography>
                </ListItemText>
            </ListItemButton>
            <AddMembers
                open={addMembersOpened}
                close={handleAddMembersClose}
                closeNewGroupModal={handleClose}
                openNewGroupModal={handleClickOpen}/>
            <Dialog open={open && !addMembersOpened} onClose={handleClose}>
                <DialogContent>
                    <Content>
                        <IconButton
                            color="primary"
                            aria-label="upload picture"
                            size={"large"}
                            component="label">
                            <input hidden accept="image/*" type="file"/>
                            <PhotoCamera fontSize={"large"}/>
                        </IconButton>
                        <TextField
                            focused
                            margin="dense"
                            id="name"
                            label="Group Name"
                            type="email"
                            fullWidth
                            variant="standard"
                        />
                    </Content>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleAddMembersOpen}>Next</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
