import React from "react";
import SectionItem from "./SectionItem";
import { MdAddBox, MdOutlineFormatListBulleted } from "react-icons/md";
import { ImUsers } from "react-icons/im";
import "./style.css";
function Dashboard() {
    const dashboard = [
        { title: "Add Product", icon: <MdAddBox />, path: "/add" },
        {
            title: "Products List",
            icon: <MdOutlineFormatListBulleted />,
            path: "/products",
        },
        { title: "Users List", icon: <ImUsers />, path: "/users" },
    ];
    return (
        <div id="admin-dashborad">
            <h1>Admin Dashboard</h1>
            <section id="admin-dashborad-container">
                {dashboard.map((elt) => {
                    return <SectionItem {...elt} />;
                })}
            </section>
        </div>
    );
}

export default Dashboard;
