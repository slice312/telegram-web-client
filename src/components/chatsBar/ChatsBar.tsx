import React from "react";
import {TextField} from "@mui/material";
import styled from "@emotion/styled";
import {ChatList} from "@/components/chatsBar/chatList/ChatList";
import {Menu} from "@/components/menu/Menu";


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

    return (
        <Wrapper>
            <Header>
                <Menu/>
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
