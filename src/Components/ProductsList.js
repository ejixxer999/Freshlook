import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';






const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

  

function ProductsList({ products }) {
    const classes = useStyles();



    const productCards = products.map(product =>
    <ProductCard key={ product.id } product={ product } /> 
    )
   
    return(
        <div>
        <List component="nav" aria-label="secondary mailbox folders">
       { productCards }
      </List>
      </div>

      
    )
}

export default ProductsList