import React, { useState, useEffect } from "react";
import axios from "axios";
import { BeatLoader } from "react-spinners";
import { Row } from "react-bootstrap";
import ProductItem from "../visitor/ProductItem";
import "../visitor/style.css";
function MyList() {
    const id = localStorage.getItem("id");
    const [myList, setMyList] = useState();
    useEffect(() => {
        axios
            .get(`/api/user/myChart/${id}`)
            .then((res) => {
                // console.log(res.data.data);
                setMyList(res.data.data);
            })
            .catch((err) => console.dir(err));
    }, [myList]);
    return (
        <div>
            <div id="products-container">
                {myList ? (
                    <div id="products-list">
                        <div id="product-list-header">
                            <h1>Produts List</h1>
                        </div>
                        <Row xs={1} md={2} className="g-4">
                            {myList.map((product) => {
                                return (
                                    <ProductItem
                                        key={product._id}
                                        {...product.product}
                                    />
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
        </div>
    );
}

export default MyList;
