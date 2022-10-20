import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import { BeatLoader } from "react-spinners";
import { Row, Button } from "react-bootstrap";

function ProductsList() {
    const [products, setProducts] = useState();
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (!show) {
            axios
                .get("/api/admin/products")
                .then((response) => setProducts(response.data.products))
                .catch((err) => console.dir(err));
        } else {
            axios
                .get("/api/admin/products/available")
                .then((response) => setProducts(response.data.data))
                .catch((err) => console.dir(err));
        }
    }, [products]);
    const handleAvailableProducts = () => {
        setShow(!show);
    };
    return (
        <div id="products-container">
            {products ? (
                <div id="products-list">
                    <div id="product-list-header">
                        <h1>Produts List</h1>
                        <Button
                            variant="dark"
                            onClick={() => {
                                handleAvailableProducts();
                            }}
                        >
                            {show ? "Reset" : "Show available product"}
                        </Button>
                    </div>
                    <Row xs={1} md={2} className="g-4">
                        {products.map((product) => {
                            return (
                                <ProductItem key={product._id} {...product} />
                            );
                        })}
                    </Row>
                </div>
            ) : (
                <div id="spinner">
                    <BeatLoader
                        color="#4c4c4c"
                        margin={9}
                        size={30}
                        speedMultiplier={1}
                    />
                </div>
            )}
        </div>
    );
}

export default ProductsList;
