import React from "react";
import {Box, AppBar, IconButton, Toolbar, Button, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";

import {useAppTheme} from "@/shared/ui/themeProvider";


const Wrapper = styled.div`
  min-height: 100vh;
`;


export const ChatsBar = () => {
    const {isDarkMode, setMode} = useAppTheme();

    return (
        <Wrapper>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Typography>
                slkrfl
            </Typography>
            <Button
                variant={"contained"}
                onClick={() => {
                    setMode(!isDarkMode);
                }}
            >
                estebes
            </Button>
        </Wrapper>
    );
};
