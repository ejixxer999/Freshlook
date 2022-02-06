import React from "react";
import { useParams } from "react-router-dom"

function ProductsShow({ products }) {
    const params = useParams()


    return(
        <div>
            <h3>{products[params.productId].name}</h3>

        </div>
    )
}

export default ProductsShow