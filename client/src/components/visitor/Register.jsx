import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate, Link } from "react-router-dom";
function Register() {
    const [registerData, setRegisterData] = useState({});
    const [error, setError] = useState();
    const navigate = useNavigate();
    const handleChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };
    const handleRegister = () => {
        axios
            .post("/api/admin/register", registerData)
            .then((res) => {
                console.log(res);
                swal(res.data.message).then(() => {
                    navigate("/login");
                });
            })
            .catch((err) => {
                if (err.response.data.message) {
                    setError(err.response.data.message);
                } else if (err.response.data.error) {
                    setError(err.response.data.error);
                }
            });
    };
    return (
        <div className="Auth-form-container">
            <form
                className="Auth-form"
                onChange={(e) => {
                    handleChange(e);
                }}
            >
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Register</h3>
                    <div className="text-center">
                        Already registered?
                        <span className="link-primary">
                            <Link to="/login"> Log In </Link>
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>First Name</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="e.g Jane "
                            name="fName"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Last Name</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="e.g Jane "
                            name="lName"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            className="form-control mt-1"
                            placeholder="e.g 22222222 "
                            name="phone"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Adress</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="e.g 22222222 "
                            name="adresse"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email Address"
                            name="email"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                            name="password"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                            name="confirmPassword"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <span style={{ color: "red" }}> {error} </span>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                                handleRegister();
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

export default Register;
