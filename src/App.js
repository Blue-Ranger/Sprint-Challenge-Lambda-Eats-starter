import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PizzaForm from "./PizzaForm";

const App = () => {
  return (
    <>
      <h1>My Pizza App</h1>

      <Router>
        <Link to={`/pizza`}>
          <button>Start Order Here!</button>
        </Link>
        <Link to={`/home`}>
          <button>Home</button>
        </Link>
        <Link to={`/help`}>
          <button>Help</button>
        </Link>
        <Route path="/pizza">
          <PizzaForm />
        </Route>
        <Route path="/"></Route>
      </Router>
    </>
  );
};
export default App;
