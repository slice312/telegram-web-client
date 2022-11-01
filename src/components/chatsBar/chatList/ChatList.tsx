import {List, ListItem, Divider, ListItemText,
    ListItemAvatar, Avatar, Typography} from "@mui/material";


export const ChatList = () => {
    return (
        <List sx={{width: "100%", maxWidth: 360, bgcolor: "background.paper"}}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Estebes Mukambetov"
                    secondary={
                        <>
                            <Typography style={{textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap"}}>
                                {" I'll be in your neighborhood oksrg kds rbfo lo rvas"}
                            </Typography>
                        </>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Talgat Tairov"
                    secondary={
                        <>
                            <Typography style={{textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap"}}>
                                {" I'll be in your neighborhood oksrg kds rbfo lo rvas"}
                            </Typography>
                        </>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Asel Kurmanbek"
                    secondary={
                        <>
                            <Typography style={{textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap"}}>
                                {" I'll be in your neighborhood oksrg kds rbfo lo rvas"}
                            </Typography>
                        </>
                    }
                />
            </ListItem>
        </List>
    );
};
