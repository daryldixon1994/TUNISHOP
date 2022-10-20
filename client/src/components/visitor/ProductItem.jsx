import React from "react";
import { Card, Col, Button, DropdownButton } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../admin/style.css";
import axios from "axios";
function ProductItem({ name, price, desc, img, inStock, _id }) {
    const navigate = useNavigate();
    let idUser = localStorage.getItem("id");
    let token = localStorage.getItem("token");
    const handleBuy = () => {
        if (!token) {
            navigate("/login");
        }
        axios
            .post(
                `/api/user/shop?id=${_id}&userId=${idUser}`,
                {},
                {
                    headers: {
                        jwt: token,
                    },
                }
            )
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.dir(err));
    };
    return (
        <Col>
            <Card id="card-item">
                <div id="dorpdown">
                    <Button
                        id="dropdown-button-drop"
                        variant="light"
                        onClick={() => {
                            handleBuy();
                        }}
                    >
                        Buy now
                    </Button>
                </div>
                <div>
                    <Card.Img
                        id="card-image"
                        variant="top"
                        src={img[0]}
                        width="150"
                    />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle> {price} TND </Card.Subtitle>
                        <Card.Text>{desc}</Card.Text>
                        {inStock === "true" ? (
                            <Card.Footer
                                style={{ color: "green", fontWeight: "bold" }}
                            >
                                Disponible
                            </Card.Footer>
                        ) : (
                            <Card.Footer
                                style={{ color: "red", fontWeight: "bold" }}
                            >
                                Out of stock
                            </Card.Footer>
                        )}
                    </Card.Body>
                </div>
            </Card>
        </Col>
    );
}

export default ProductItem;
