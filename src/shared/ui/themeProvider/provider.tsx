import {useState, useCallback, ReactNode} from "react";
import {ThemeProvider} from "@mui/material";

import {AppThemeContext} from "./context";
import {darkTheme} from "./themes/darkTheme";
import {lightTheme} from "./themes/lightTheme";


interface Props {
    children: ReactNode;
}


export const AppThemeProvider = (props: Props) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const setMode = useCallback((isDark: boolean) => {
        setIsDarkMode(isDark);
    }, []);


    return (
        <AppThemeContext.Provider
            value={{
                isDarkMode,
                setMode
            }}
        >
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                {props.children}
            </ThemeProvider>
        </AppThemeContext.Provider>
    );
};