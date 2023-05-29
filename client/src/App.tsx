import React from 'react';
import {Header} from "./components/Header";
import {Box} from "@mui/material";
import {AppRoutes} from "./components/AppRoutes";

const App = () => {
    return (
        <div>
            <Header/>
            <Box sx={{p: "15px 80px"}}>
                <AppRoutes/>
            </Box>
        </div>
    );
};

export default App;