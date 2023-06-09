import React from 'react';
import {Header} from "./components/Header";
import {Box} from "@mui/material";
import {AppRoutes} from "./components/AppRoutes";

const App = () => {
    return (
        <>
            <Header/>
            <Box sx={{p: "15px 80px"}}>
                <AppRoutes/>
            </Box>
        </>
    );
};

export default App;