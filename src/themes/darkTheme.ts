import {createTheme} from "@mui/material/styles";
import {blue} from "@mui/material/colors";


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
            main: blue[500],
        },
    },
});