import React from "react"
import { Route, Switch } from "react-router-dom"
import NavBar from "./NavBar";
import About from "./About";
import Contact from "./Contact"
import Home from "./Home"
import Products from "./Products";

function App() {
  return (
    <div>
      <h1>Fresh Look Details!</h1>
      <NavBar />
        <Switch>
            <Route exact path="/about">
                <About />
            </Route>

            <Route exact path="/products">
              <Products />
            </Route>

            <Route exact path="/contact">
                <Contact />
            </Route>

            <Route exact path="/products">
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
