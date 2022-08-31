import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Nav from "./components/navbar";
import About from "./pages/about";
import Detailscocktale from "./pages/details";
// import SingleCocktale from "./pages/details";
import Errorz from "./pages/error";
import Home from "./pages/home";
// import SingleCocktale from "./components/details";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/details/:id">
          <Detailscocktale />
        </Route>

        <Route path="*">
          <Errorz />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
