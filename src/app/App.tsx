import {Router} from "./Router";
import "./styles/index.css";
import {AppThemeProvider} from "@/shared/ui/themeProvider";


export const App = () => {
    return (
        <AppThemeProvider>
            <Router/>
        </AppThemeProvider>
    );
};