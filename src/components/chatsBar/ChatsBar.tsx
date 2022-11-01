import React from "react";
import {InputBase, IconButton, TextField} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";
import {ChatList} from "@/components/chatsBar/chatList/ChatList";

import {useAppTheme} from "@/shared/ui/themeProvider";


const Wrapper = styled.div(({theme}) => `
  padding: 8px;
  min-height: 100vh;
  border-right: 1px solid ${theme.palette.secondary.main};
`);

const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 4px;
`;


export const ChatsBar = () => {
    const {isDarkMode, setMode} = useAppTheme();

    return (
        <Wrapper>
            <Header>
                <IconButton
                    size={"large"}
                    onClick={() => {
                        setMode(!isDarkMode);
                    }}
                >
                    <MenuIcon fontSize={"large"}/>
                </IconButton>
                <TextField
                    placeholder="Search"
                    sx={{fontSize: "20px", mr: "4px"}}
                    size={"small"}
                    color={"primary"}
                    fullWidth
                    inputProps={{
                        style: {
                            fontSize: 18,
                            width: "100%",
                            display: "block"
                        }
                    }}
                />
            </Header>
            <ChatList/>
        </Wrapper>
    );
};
