import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function SectionItem({ title, icon, path }) {
    return (
        <div id="section-item">
            <Link
                to={path}
                style={{ textDecoration: "none", color: "inherit" }}
            >
                <h2>{icon}</h2>
                <h1> {title} </h1>
            </Link>
        </div>
    );
}

export default SectionItem;
