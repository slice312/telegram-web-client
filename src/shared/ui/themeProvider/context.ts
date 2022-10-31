import {createContext, useContext} from "react";


interface AppThemeContextValue {
    isDarkMode: boolean;
    setMode: (isDark: boolean) => void;
}

export const AppThemeContext = createContext<Nullable<AppThemeContextValue>>(null);


export const useAppTheme = () => {
    const context = useContext(AppThemeContext);
    if (!context)
        throw new Error("No AppThemeContext");

    return context;
};