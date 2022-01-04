import React, { useState } from "react";
import { Container } from "react-bootstrap";
import swal from "sweetalert";
import "./AddProudcts.css"

const AddProducts = () => {
    const [product, setProduct] = useState({});

    const handleBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = { ...product };
        newProduct[field] = value;
        setProduct(newProduct);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("https://softy-shop-web.herokuapp.com/addProduct", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(product),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    swal("Product Inserted Successfully!", "", "success");
                    e.target.reset();
                }
            });

        console.log(product);
    };

    const textArea = {
        height: "200px",
        outline: "none",
        border: "2px solid #3498db",
        width: "100%",
        padding: "5px",
    };

    return (
        <div>
            <Container>
                <h2 className="text-center mb-4 fw-bold mt-3" style={{ color: "#3498db" }}>
                    Add a Product
                </h2>
                <div className="form-area">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            onBlur={handleBlur}
                            name="name"
                            placeholder="Product Name"
                            required
                        />
                        <input
                            type="text"
                            onBlur={handleBlur}
                            name="category"
                            placeholder="Category Name"
                            required
                        />
                        <input
                            type="text"
                            onBlur={handleBlur}
                            name="brand"
                            placeholder="Brand Name"
                            required
                        />
                        <input
                            onBlur={handleBlur}
                            type="text"
                            name="img"
                            placeholder="Image URL"
                            required
                        />
                        <input
                            onBlur={handleBlur}
                            type="number"
                            name="price"
                            placeholder="Price"
                            required
                        />
                        <input
                            onBlur={handleBlur}
                            type="number"
                            name="review"
                            placeholder="Review"
                            required
                        />
                        <textarea
                            style={textArea}
                            onBlur={handleBlur}
                            type="text"
                            name="desc"
                            placeholder="Description"
                            required
                        />
                        <button type="submit" className="signBtn mt-2">
                            Add Product
                        </button>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default AddProducts;