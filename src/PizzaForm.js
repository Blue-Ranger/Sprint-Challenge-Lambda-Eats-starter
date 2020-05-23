import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "You name should have 2 characters")
    .required("You don't have a name?"),
  psize: yup.string().required("Please chooose a size"),
  redsauce: yup.boolean(),
  garlic: yup.boolean(),
  bbq: yup.boolean(),
  spinach: yup.boolean(),
  chedder: yup.boolean(),
  pepperoni: yup.boolean(),
});

const PizzaForm = (props) => {
  // managing state for form
  const [formState, setFormState] = useState({
    redsauce: false,
    garlic: false,
    bbq: false,
    spinach: false,
    chedder: false,
    name: "",
    instructions: "",
    psize: "",
    pepperoni: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    instructions: "",
  });
  const [order, setOrder] = useState({});
  // const [buttonDisabled, setButtonDisabled] = useState(true);

  const validate = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    yup
      .reach(formSchema, e.target.name)
      .validate(value)

      .then((valid) => {
        setErrors({
          ...errors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [e.target.name]: err.errors[0],
        });
      });
    setFormState({
      ...formState,
      [e.target.name]: value,
    });
  };

  // formSubmit function
  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Pizza ordered!");
    axios
      .post("https://reqres.in/api/users", formState)
      .then((response) => {
        setOrder(response.data);
      })
      .catch((err) => console.log(err));
  };

  // onChange function
  // const onChange = (e) => {
  //   e.persist();
  //   console.log("input changed!", e.target.value, e.target.checked);
  //   validate(e);
  // };

  // handleChange function
  const handleChange = (e) => {
    e.persist();
    console.log("input changed!", e.target.value, e.target.checked);
    validate(e);
  };

  // use effect function

  return (
    <div>
      <form onSubmit={formSubmit}>
        <label htmlFor="name">
          Name Your Pizza:
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Save for future orders!"
            value={formState.name}
            onChange={handleChange}
          />
          {errors.name.length > 0 ? (
            <p className="error">{errors.name}</p>
          ) : null}
        </label>

        <h1> Build Your Own Pizza! </h1>

        <label htmlFor="size">
          <h3> What Size Pizza? </h3>
          Pizza Size:
          <select
            id="psize"
            name="psize"
            value={formState.psize}
            onChange={handleChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="Extralarge">Extra Large</option>
          </select>
        </label>

        <h3> Select Your Sauce: </h3>

        <label htmlFor="redsauce" className="redsauce">
          <input
            id="redsauce"
            type="checkbox"
            name="redsauce"
            checked={formState.redsauce}
            onChange={handleChange}
          />
          Original Red
        </label>

        <label htmlFor="garlic" className="garlic">
          <input
            id="garlic"
            type="checkbox"
            name="garlic"
            value={formState.garlic}
            onChange={handleChange}
          />
          Garlic Ranch
        </label>

        <label htmlFor="bbq" className="bbq">
          <input
            id="bbq"
            type="checkbox"
            name="bbq"
            value={formState.bbq}
            onChange={handleChange}
          />
          BBQ Sauce
        </label>

        <label htmlFor="spinach" className="spinach">
          <input
            id="spinach"
            type="checkbox"
            name="spinach"
            value={formState.spinach}
            onChange={handleChange}
          />
          Spinach Alfredo
        </label>

        <h3> Select Your Toppings: </h3>

        <label htmlFor="toppings">
          <h3> Select Your Cheese: </h3>
          Chedder
          <input
            id="chedder"
            data-test-id="bestTopping"
            type="checkbox"
            name="chedder"
            onChange={handleChange}
          />
          <h3> Select Your Meat: </h3>
          Pepporoni
          <input
            id="pepperoni"
            type="checkbox"
            name="pepperoni"
            value={formState.name}
            onChange={handleChange}
          />
        </label>

        <h3>Any Special Instructions?</h3>

        <label htmlFor="instructions">
          Special Instructions:
          <textarea name="instructions" />
        </label>

        <button data-test-id="submitButton">Submit</button>
        <pre>{JSON.stringify(order, null, 2)}</pre>
      </form>
    </div>
  );
};

export default PizzaForm;
