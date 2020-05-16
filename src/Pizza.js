import React from "react";

import { useState, useEffect } from "react";

const Pizza = () => {
  const [user, setUser] = useState([]);

  return (
    <div>
      <form>
        <label htmlFor="name">
          Name Your Pizza
          <input type="text" name="name" />
        </label>

        <h1> Build Your Own Pizza! </h1>

        <label htmlFor="size">
          <h3> What Size Pizza? </h3>
          Pizza Size:
          <select id="psize" name="psize">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="Extralarge">Extra Large</option>
          </select>
        </label>

        <h3> Select Your Sauce </h3>

        <label htmlFor="red" className="red">
          <input type="radio" name="red" />
          Original Red
        </label>

        <label htmlFor="garlic" className="garlic">
          <input type="radio" name="garlic" />
          Garlic Ranch
        </label>

        <label htmlFor="bbq" className="bbq">
          <input type="radio" name="bbq" />
          BBQ Sauce
        </label>

        <label htmlFor="spinach" className="spinach">
          <input type="radio" name="spinach" />
          Spinach Alfredo
        </label>

        <h3> Select Your Toppings </h3>

        <label htmlFor="toppings">
          Toppings: Plain
          <input id="toppings1" type="checkbox" name="toppings" value="Plain" />
          <h3> Select Your Cheese </h3>
          Chedder
          <input
            id="toppings2"
            type="checkbox"
            name="toppings"
            value="Chedder"
          />
          Cheese
          <input
            id="toppings3"
            type="checkbox"
            name="toppings"
            value="Cheese"
          />
          Three Cheese
          <input
            id="toppings4"
            type="checkbox"
            name="toppings"
            value="Three Cheese"
          />
          ExtraCheese
          <input
            id="toppings5"
            type="checkbox"
            name="toppings"
            value="ExtraCheese"
          />
          <h3> Select Your Meat </h3>
          Pepporoni
          <input
            id="toppings6"
            type="checkbox"
            name="toppings"
            value="Pepperoni"
          />
          Sausage
          <input
            id="toppings7"
            type="checkbox"
            name="toppings"
            value="Sausage"
          />
          Canadian Bacon
          <input
            id="toppings8"
            type="checkbox"
            name="toppings"
            value="Canadian Bacon"
          />
          Spicy Italian Sausage
          <input
            id="toppings9"
            type="checkbox"
            name="toppings"
            value="Spicy Italian Sausage"
          />
          GrilledChicken
          <input
            id="toppings10"
            type="checkbox"
            name="toppings"
            value="Grilled Chicken"
          />
          <h3> Select Other Toppings </h3>
          Onions
          <input
            id="toppings11"
            type="checkbox"
            name="toppings"
            value="Onions"
          />
          Green Peppers
          <input
            id="toppings12"
            type="checkbox"
            name="toppings"
            value="Green Peppers"
          />
          Diced Tomatoes
          <input
            id="toppings13"
            type="checkbox"
            name="toppings"
            value="Diced Tomatoes"
          />
          Black Olives
          <input
            id="toppings14"
            type="checkbox"
            name="toppings"
            value="Black Olives"
          />
          Roasted Garlic
          <input
            id="toppings15"
            type="checkbox"
            name="toppings"
            value="Roasted Garlic"
          />
          Artichoke Hearts
          <input
            id="toppings16"
            type="checkbox"
            name="toppings"
            value="Artichoke Hearts"
          />
          Pineapple
          <input
            id="toppings17"
            type="checkbox"
            name="toppings"
            value="Pineapple"
          />
        </label>

        <h3>Any Special Instructions?</h3>

        <label htmlFor="instructions">
          Special Instructions
          <textarea name="instructions" />
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Pizza;
