import React, { useEffect, useState } from "react";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert";
function UpdateProduct() {
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [newProductData, setNewProductData] = useState({});
    const [newFile, setNewFile] = useState();
    let { id } = useParams();
    useEffect(() => {
        axios
            .get(`/api/admin/product/${id}`)
            .then((res) => setProduct(res.data.product))
            .catch((err) => console.dir(err));
    }, [id]);
    const handleChange = (e) => {
        setNewProductData({
            ...newProductData,
            [e.target.name]: e.target.value,
        });
    };
    const handleFile = (e) => {
        setNewFile(e.target.files);
    };
    const handleUpdateProduct = () => {
        let newProductFormData = new FormData();
        if (newProductData.name) {
            newProductFormData.append("name", newProductData.name);
        }
        if (newProductData.price) {
            newProductFormData.append("price", newProductData.price);
        }
        if (newProductData.desc) {
            newProductFormData.append("desc", newProductData.desc);
        }
        if (newProductData.inStock) {
            newProductFormData.append("inStock", newProductData.inStock);
        }
        if (newProductData.color) {
            newProductFormData.append("color", newProductData.color);
        }
        if (newFile) {
            for (let i = 0; i < newFile.length; i++) {
                newProductFormData.append("photos", newFile[i]);
            }
        }
        axios
            .post(`/api/admin/updateProduct/${id}`, newProductFormData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                if (res) {
                    navigate("/products");
                }
                swal(res.data.message, "", "success").then(() => {
                    navigate("/products");
                });
            })
            .catch((err) => {
                console.dir(err);
            });
    };
    return (
        <div>
            <h1>Update product</h1>
            <Form noValidate id="add-product-container">
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Product name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            name="name"
                            defaultValue={product.name}
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        />
                        <Form.Control.Feedback>
                            Looks good!
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Price (TND)</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            min={0}
                            placeholder="Last name"
                            defaultValue={product.price}
                            name="price"
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        />
                        {/* ERROR MESSAGE */}
                        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                    </Form.Group>
                    <Form.Group
                        as={Col}
                        md="4"
                        controlId="validationCustomUsername"
                    >
                        <Form.Label>Avilability</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Select
                                aria-label="Default select example"
                                name="inStock"
                                onChange={(e) => {
                                    handleChange(e);
                                }}
                            >
                                <option>Open this select menu</option>
                                <option value={true}>Yes</option>
                                <option value={false} name="inStock">
                                    No
                                </option>
                            </Form.Select>

                            {/* <Form.Control.Feedback type="invalid">
                            Please choose a username.
                        </Form.Control.Feedback> */}
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>Select image</Form.Label>
                        <Form.Control
                            type="file"
                            placeholder="State"
                            required
                            onChange={(e) => {
                                handleFile(e);
                            }}
                            multiple
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            type="text"
                            placeholder="..."
                            name="desc"
                            required
                            onChange={(e) => {
                                handleChange(e);
                            }}
                            defaultValue={product.desc}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>Color</Form.Label>
                        <Form.Control
                            type="color"
                            placeholder="State"
                            required
                            name="color"
                            defaultValue={product.color}
                            onChange={(e) => {
                                handleChange(e);
                            }}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button
                    type="button"
                    variant="warning"
                    onClick={() => {
                        handleUpdateProduct();
                    }}
                >
                    Update
                </Button>
            </Form>
        </div>
    );
}

export default UpdateProduct;
