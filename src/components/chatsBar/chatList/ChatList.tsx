import {List, Badge, ListItem, Divider, ListItemText,
    ListItemAvatar, Avatar, Typography} from "@mui/material";


export const ChatList = () => {
    return (
        <List sx={{width: "100%", maxWidth: 360, bgcolor: "background.paper"}}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <Typography style={{textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap"}}>
                                {"Estebes Mukambetovdaefaefaefaef"}
                            </Typography>
                            <Typography>
                                12.09.2022
                            </Typography>
                        </div>
                    }
                    secondary={
                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingTop: 4
                        }}>
                            <Typography style={{textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap"}}>
                                {"Wish I could come, but I'm out of town this"}
                            </Typography>
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                minWidth: 28,
                                height: 28,
                                padding: "0 8px",
                                borderRadius: 14,
                                backgroundColor: "red",
                                marginLeft: 6
                            }}>
                                <p style={{fontSize: "14px", lineHeight: "12px"}}>49</p>
                            </div>
                        </div>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
    );
};
