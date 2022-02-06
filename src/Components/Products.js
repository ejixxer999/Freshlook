
import React, { useEffect, useState } from "react";
import { Route, useRouteMatch } from "react-router-dom"
import ProductsList from "./ProductsList";
import ProductsShow from "./ProductsShow"

function Products() {
    const [products, setProducts] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const match = useRouteMatch()
    
    useEffect(() => {
        fetch(`http://localhost:3000/products`)
        .then(r => r.json())
        .then(data => setProducts(data))
        setIsLoaded(true)
    }, [])

    if (!isLoaded) return<h3>Loading...</h3>

    return(
        <div>
            <ProductsList products={products} />
            <Route path={`${match.url}/:productId`}>
                <ProductsShow products={products} />
            </Route>


        </div>
    )
}

export default Products