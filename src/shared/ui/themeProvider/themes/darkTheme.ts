import {createTheme} from "@mui/material/styles";


export const darkTheme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#263238" // Override primary color for AppBar
                }
            }
        }
    },
    palette: {
        mode: "dark",
        primary: {
            main: "#263238",
        },
        secondary: {
            main: "#424242",
        },
    },
});