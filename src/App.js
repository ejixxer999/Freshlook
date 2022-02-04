import React from "react"
import { Route, Switch } from "react-router-dom"
import NavBar from "./NavBar";
import About from "./About";
import Contact from "./Contact"
import Home from "./Home"

function App() {
  return (
    <div>
      <h1>Fresh Look Details!</h1>
      <NavBar />
        <Switch>
            <Route exact path="/about">
                <About />
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
