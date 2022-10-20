import React from "react";
import { Card, Col, Dropdown, DropdownButton } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";
function ProductItem({ name, price, desc, img, inStock, _id }) {
    const handleDelete = () => {
        axios
            .delete(`/api/admin/deleteProduct/${_id}`)
            .then((res) => console.log(res))
            .catch((err) => console.dir(err));
    };
    return (
        <Col>
            <Card id="card-item">
                <div id="dorpdown">
                    <DropdownButton
                        id="dropdown-button-drop"
                        size="sm"
                        variant="light"
                        title=""
                    >
                        <Dropdown.Item
                            eventKey="1"
                            as={Link}
                            to={`/updateProduct/${_id}`}
                        >
                            Update product
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item
                            eventKey="2"
                            onClick={() => {
                                handleDelete();
                            }}
                        >
                            Delete product
                        </Dropdown.Item>
                    </DropdownButton>
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
                                Available
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
