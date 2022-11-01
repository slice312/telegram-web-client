import {
    List, ListItem, ListItemText,
    ListItemAvatar, Avatar, Typography
} from "@mui/material";
import styled from "@emotion/styled";


interface Chat {
    id: string;
    avatar: string;
    title: string;
    lastSender: string;
    date: string;
    message: string;
    unreadCount: number;
}

const PrimaryBlock = styled.div(({theme}) => `
    display: flex;
    justify-content: space-between;
    align-items: center;
`);

const MessageBadge = styled.div(({theme}) => `
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 28px;
    height: 28px;
    border-radius: 14px;
    padding: 0 8px;
    margin-left: 6px;
    background-color: ${theme.palette.primary.main};
    color: white;
`);

export const ChatList = () => {
    const chats: Chat[] = [
        {
            id: "1",
            avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/640px-Telegram_2019_Logo.svg.png",
            title: "Estebes Mukambetov",
            lastSender: "Estebes",
            date: "12.10.2022",
            message: "Privet kak dela khbvli lh ku l kugv kyg kjb jk j jh",
            unreadCount: 90
        },
        {
            id: "2",
            avatar: "https://laravelnews.s3.amazonaws.com/images/laravel-vite-featured.jpg",
            title: "Talgat Tairov",
            lastSender: "Estebes",
            date: "13:43",
            message: "Privet kak dela",
            unreadCount: 10
        },
        {
            id: "3",
            // eslint-disable-next-line max-len
            avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/1200px-VK_Compact_Logo_%282021-present%29.svg.png",
            title: "Asel Kurmanbek",
            lastSender: "Estebes",
            date: "12.10.2022",
            message: "Privet kak dela",
            unreadCount: 10
        },
        {
            id: "4",
            avatar: "https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN",
            title: "Bakyt Shairbekov",
            lastSender: "Estebes",
            date: "11:21",
            message: "Privet kak dela",
            unreadCount: 10
        },
        {
            id: "5",
            avatar: "https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png",
            title: "Estebes Mukambetov",
            lastSender: "Estebes",
            date: "12.10.2022",
            message: "Privet kak dela",
            unreadCount: 10
        },
        {
            id: "6",
            avatar: "https://slovnet.ru/wp-content/uploads/2019/01/2-2.jpeg",
            title: "Estebes Mukambetov",
            lastSender: "Estebes",
            date: "12.10.2022",
            message: "Privet kak dela",
            unreadCount: 10
        },
    ];


    return (
        <List sx={{width: "100%", maxWidth: 360, bgcolor: "background.paper"}}>
            {chats.map(chat =>
                <ListItem alignItems="flex-start" key={chat.id}>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={chat.avatar}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <div>
                                <PrimaryBlock>
                                    <Typography
                                        style={{
                                            textOverflow: "ellipsis",
                                            overflow: "hidden",
                                            whiteSpace: "nowrap",
                                            fontSize: 18,
                                            fontWeight: 700,
                                        }}>
                                        {chat.title}
                                    </Typography>
                                    <Typography>
                                        {chat.date}
                                    </Typography>
                                </PrimaryBlock>
                                <PrimaryBlock>
                                    <Typography
                                        sx={{textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap"}}>
                                        {chat.message}
                                    </Typography>
                                    {chat.unreadCount > 0 &&
                                        <MessageBadge>
                                            <Typography sx={{fontSize: "14px", lineHeight: "12px"}}>
                                                {chat.unreadCount}
                                            </Typography>
                                        </MessageBadge>
                                    }
                                </PrimaryBlock>
                            </div>
                        }
                    />
                </ListItem>
            )}
        </List>
    );
};
