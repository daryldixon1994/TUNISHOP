import React, { useState } from "react";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
function AddProducts() {
    const [productData, setProductData] = useState({});
    const navigate = useNavigate();
    const [newFile, setNewFile] = useState();
    const handleChange = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value });
    };
    const handleFile = (e) => {
        setNewFile(e.target.files);
    };
    const saveNewProduct = (e) => {
        let productFormData = new FormData();
        productFormData.append("name", productData.name);
        productFormData.append("price", productData.price);
        productFormData.append("desc", productData.desc);
        productFormData.append("inStock", productData.inStock);
        productFormData.append("color", productData.color);
        for (let i = 0; i < newFile.length; i++) {
            productFormData.append("photos", newFile[i]);
        }
        axios
            .post("/api/admin/addProduct", productFormData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                console.log(res);
                swal(res.data.message, "success").then(() => {
                    navigate("/products");
                });
            })
            .catch((err) => {
                console.dir(err);
            });
    };
    return (
        <div>
            <h1>Add new product</h1>
            <Form
                noValidate
                // validated={validated}
                // onSubmit={handleSubmit}

                id="add-product-container"
            >
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Product name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            name="name"
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
                            placeholder="City"
                            name="desc"
                            required
                            onChange={(e) => {
                                handleChange(e);
                            }}
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
                    onClick={(e) => {
                        saveNewProduct(e);
                    }}
                >
                    Save
                </Button>
            </Form>
        </div>
    );
}

export default AddProducts;
