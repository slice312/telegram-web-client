import {createTheme} from "@mui/material/styles";
import {purple} from "@mui/material/colors";


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
            main: purple[500],
            contrastText: purple[500]
        },
        secondary: {
            main: "#424242",
        }
    },
});