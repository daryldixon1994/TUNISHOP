import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function NavBar() {
    const isAdmin = localStorage.getItem("isAdmin");
    const isUser = localStorage.getItem("isUser");
    const id = localStorage.getItem("id");
    const navigate = useNavigate();

    const [myList, setMyList] = useState();
    useEffect(() => {
        axios
            .get(`/api/user/myChart/${id}`)
            .then((res) => setMyList(res.data.data))
            .catch((err) => console.dir(err));
    }, [myList]);

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    };
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">
                    Tunishop
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        {isAdmin == "true" && (
                            <Nav.Link as={Link} to="/dashboard">
                                Dashboard
                            </Nav.Link>
                        )}
                        {isUser == "true" && (
                            <Nav.Link as={Link} to="/myList">
                                MyList{" "}
                                <span
                                    style={{
                                        color: "orangered",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {myList && myList.length}
                                </span>
                            </Nav.Link>
                        )}
                        {/* <Nav.Link href="#">Link</Nav.Link> */}
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        {/* <Button variant="outline-success">Search</Button> */}
                        <Button
                            variant="outline-danger"
                            onClick={() => {
                                handleLogout();
                            }}
                        >
                            Logout
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
