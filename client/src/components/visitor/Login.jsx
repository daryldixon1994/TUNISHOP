import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
    const [loginData, setLoginData] = useState({});
    const navigate = useNavigate();
    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };
    const handleLogin = () => {
        axios
            .post("/api/admin/login", loginData)
            .then((res) => {
                if (res) {
                    localStorage.setItem("id", res.data.data.id);
                    localStorage.setItem("isAdmin", res.data.data.isAdmin);
                    localStorage.setItem("isBanned", res.data.data.isBanned);
                    localStorage.setItem("isUser", res.data.data.isUser);
                    localStorage.setItem("token", res.data.data.token);
                    if (localStorage.getItem("isAdmin") == "true") {
                        return navigate("/dashboard");
                    }
                    navigate("/");
                }
            })
            .catch((err) => console.dir(err.response.data.message));
    };
    return (
        <div className="Auth-form-container-login">
            <form
                className="Auth-form"
                onChange={(e) => {
                    handleChange(e);
                }}
            >
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Login In</h3>
                    <div className="text-center">
                        Not registered yet?
                        <span className="link-primary">
                            <Link to="/register">Create account</Link>
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            name="email"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            name="password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                                handleLogin();
                            }}
                        >
                            Submit
                        </button>
                    </div>
                    <p className="text-center mt-2">
                        Forgot <a href="#">password?</a>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default Login;
