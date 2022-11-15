import {Paper} from "@mui/material";
import {ChatsBar} from "@/components/chatsBar/ChatsBar";


export const Main = () => {
    return (
        <Paper elevation={0} square sx={{display: "flex"}}>
            <ChatsBar/>
        </Paper>
    );
};