import React from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
function NavBar() {
    const isAdmin = localStorage.getItem("isAdmin");
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    };
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
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
