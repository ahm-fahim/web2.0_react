import React from 'react';
import Navber from "../components/Navber/Navber"
const MainLayout = ({children}) => {
    return (
        <div>
            <Navber></Navber>
            <div>{ children}</div>
        </div>
    );
};

export default MainLayout;