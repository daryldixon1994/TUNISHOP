import React from "react";
import { Navigate } from "react-router-dom";
function AdminRoute({ children }) {
    const token = localStorage.getItem("token");
    const isUser = localStorage.getItem("isUser");
    if (!token) {
        return <Navigate to="/login" />;
    } else if (!token && isUser == "true") {
        return <Navigate to="/" />;
    }
    return children;
}

export default AdminRoute;
