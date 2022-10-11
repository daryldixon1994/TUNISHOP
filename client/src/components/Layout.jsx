import React from "react";
import NavBar from "../../src/components/NavBar";
import { Outlet } from "react-router-dom";
function Layout() {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
}

export default Layout;
