import {createTheme} from "@mui/material/styles";
import {green, purple} from "@mui/material/colors";


export const lightTheme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: "#e0e0e0",
        },
    },
});