import React from "react"
import { Link } from "react-router-dom"

function ProductsList({ products }) {
    const renderProducts = Object.keys(products).map((productID) => (
        <li key={productID}>
            <Link to={`/products/${productID}`}>
                {products[productID].name}
            </Link>
        </li>
    ))
    return <ul>{renderProducts}</ul>

}

export default ProductsList
