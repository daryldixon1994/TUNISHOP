import React from "react";
import { Navigate } from "react-router-dom";
function AdminRoute({ children }) {
    const token = localStorage.getItem("token");
    const isAdmin = localStorage.getItem("isAdmin");
    if (!token) {
        return <Navigate to="/login" />;
    } else if (!token && isAdmin == "true") {
        return <Navigate to="/" />;
    }
    return children;
}

export default AdminRoute;
