import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ProductShow from "./ProductShow";
import { Route, useRouteMatch } from "react-router-dom"

function ProductCard({ product }) {
  const match = useRouteMatch()
  console.log(match)


 

    return(
      <div>
         <ListItem button>
          <ListItemText primary={ product.name } secondary={product.price} />
        </ListItem>

        <Route path={ `${match.url}/:productId`} >
          <ProductShow />
        </Route>


      </div>
    )

}

export default ProductCard