import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


function ProductShow() {
    const [product, setProduct] = useState(null)
    const params = useParams()
    console.log(params)

    useEffect(() => {
        fetch(`https://localhost:3000/products/${params.id}`)
        .then(r => r.json())
        .then(data => setProduct(data))
    }, [params.id])

    return(
        <div>
            
        </div>
    )
}

export default ProductShow