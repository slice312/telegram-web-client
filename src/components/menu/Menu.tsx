import MenuIcon from "@mui/icons-material/Menu";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SettingsIcon from "@mui/icons-material/Settings";
import Brightness4Icon from "@mui/icons-material/Brightness4";

import {
    Avatar,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemAvatar, ListItemButton,
    ListItemText, Switch,
    Typography
} from "@mui/material";
import {useState, ReactNode} from "react";
import {useAppTheme} from "@/shared/ui/themeProvider";
import {NewGroup} from "@/components/menu/newGroup/NewGroup";


interface MenuItem {
    icon: ReactNode;
    title: string;
    color: string;
}


export const Menu = () => {
    const [opened, setOpened] = useState<boolean>();
    const {isDarkMode, setMode} = useAppTheme();

    const toggleDrawer = (opened: boolean) => {
        setOpened(opened);
    };

    const menu: MenuItem[] = [
        {
            icon: <ThumbDownIcon sx={{color: "white"}}/>,
            title: "New Channel",
            color: "#ef6c00"
        },
        {
            icon: <PersonIcon sx={{color: "white"}}/>,
            title: "Contacts",
            color: "#ff3d00"
        },
        {
            icon: <CallIcon sx={{color: "white"}}/>,
            title: "Calls",
            color: "#689f38"
        },
        {
            icon: <BookmarkIcon sx={{color: "white"}}/>,
            title: "Saved Messages",
            color: "#0091ea"
        },
        {
            icon: <SettingsIcon sx={{color: "white"}}/>,
            title: "Settings",
            color: "#9575cd"
        }
    ];

    return (
        <>
            <IconButton
                size={"large"}
                onClick={() => toggleDrawer(true)}
            >
                <MenuIcon fontSize={"large"}/>
            </IconButton>
            <Drawer
                anchor={"left"}
                open={opened}
                onClose={() => toggleDrawer(false)}
            >
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar
                                sx={{width: 64, height: 64}}
                                src={"https://slovnet.ru/wp-content/uploads/2019/01/2-2.jpeg"}
                                alt={"avatar"}/>
                        </ListItemAvatar>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            <Typography fontSize={18} fontWeight={700}>
                                emt
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <NewGroup/>
                    </ListItem>
                    {menu.map((item, index) =>
                        <ListItem key={index}>
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar
                                        sx={{bgcolor: item.color, width: 36, height: 36}}
                                        variant={"rounded"}>

                                        {item.icon}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText>
                                    <Typography fontSize={18}>
                                        {item.title}
                                    </Typography>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    )}
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar
                                sx={{bgcolor: "#7986cb", width: 36, height: 36}}
                                variant={"rounded"}>

                                <Brightness4Icon sx={{color: "white"}}/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText>
                            <Typography fontSize={18}>
                                {"Night Mode"}
                            </Typography>
                        </ListItemText>
                        <ListItemButton sx={{ml: 8}}>
                            <Switch checked={isDarkMode} onChange={() => setMode(!isDarkMode)}/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};