import React, { useEffect, useState} from "react"
import { Route, Switch } from "react-router-dom"
import NavBar from "./NavBar";
import About from "./About";
import Contact from "./Contact"
import Home from "./Home"
import ProductsList from "./ProductsList";
import ReviewsList from "./ReviewsList";


function App() {
 const [products, setProducts] = useState([])
 const [reviews, setReviews] = useState([])

 useEffect(() => {
   const fetchProducts = async () => {
     const response = await fetch('http://localhost:3000/products')
     const data = await response.json()
     setProducts(data)
   }
   
   fetchProducts()
  }, [])

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch('http://localhost:3000/Reviews')
      const data = await response.json()
      setReviews(data)
    }
    fetchReviews()
  }, [])
 
  return (
    <div id="nav a">
      <NavBar />
        <Switch>
            <Route exact path="/about">
                <About />
            </Route>

            <Route exact path="/products">
              <ProductsList products={ products } />
            </Route>

            <Route exact path="/reviews">
              <ReviewsList reviews={ reviews } />
            </Route>

            <Route exact path="/contact">
                <Contact />
            </Route>

            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    </div>
  );
}

export default App;

// today todos 
//create contact us form 
// create product cards and display them
// allow set state so i can save items to a shopping cart
// create a list of products that can be selected but still zhow the list
