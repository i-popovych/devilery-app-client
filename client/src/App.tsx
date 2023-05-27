import React from 'react';
import {Header} from "./components/Header";
import {Container} from "@mui/material";
import {ShopsList} from "./components/ShopsList/ShopsList";
import Shop from "./pages/Shop";
import {AppRoutes} from "./components/AppRoutes";

const App = () => {
    return (
        <div>
            <Header/>
            <AppRoutes/>
        </div>
    );
};

export default App;