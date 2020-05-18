import React, { useState, useEffect } from "react";
import * as yup from "yup";

const formSchema = yup.object().shape({
  id: yup.string().required(),
  name: yup
    .string()
    .min(2, "You name should have 2 characters")
    .required("You don't have a name?"),
  type: yup.string().min(1).required(),
  value: yup.string().required(),
});

const PizzaForm = () => {
  // managing state for form
  const [formState, setFormState] = useState({
    id: "",
    name: "",
    type: "",
    value: "",
    addOns: "",
  });

  const [errors, setErrors] = useState({
    id: "",
    name: "",
    type: "",
    value: "",
    addOns: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const validate = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.name;
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)

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
  };

  // formSubmit function
  const formSubmit = (e) => {
    e.preventDefault();

    console.log("form submitted!", formState);
  };

  // onChange function
  const onChange = (e) => {
    e.persist();
    validate(e); /*something wrong here, crashes when a radio is selected*/
    console.log(e.target.value, e.target.checked);
    const value = e.target.type === "radio" ? e.target.checked : e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };

  // handleChange function
  const handleChange = (e) => {
    e.persist();
    setFormState({
      ...formState,
      addOns: [formState.addOns, e.target.value],
    });
  };

  // use effect function
  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

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
            onChange={onChange}
          />
          {errors.name.length > 0 ? (
            <p className="error">{errors.name}</p>
          ) : null}
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
          {errors.psize.length > 0 ? (
            <p className="error">{errors.psize}</p>
          ) : null}
        </label>

        <h3> Select Your Sauce: </h3>

        <label htmlFor="redsauce" className="redsauce">
          <input
            type="radio"
            name="redsauce"
            value={formState.name}
            onChange={onChange}
          />
          Original Red
        </label>

        <label htmlFor="garlic" className="garlic">
          <input
            type="radio"
            name="garlic"
            value={formState.name}
            onChange={onChange}
          />
          Garlic Ranch
        </label>

        <label htmlFor="bbq" className="bbq">
          <input
            type="radio"
            name="bbq"
            value={formState.name}
            onChange={onChange}
          />
          BBQ Sauce
        </label>

        <label htmlFor="spinach" className="spinach">
          <input
            type="radio"
            name="spinach"
            value={formState.name}
            onChange={onChange}
          />
          Spinach Alfredo
        </label>

        <h3> Select Your Toppings: </h3>

        <label htmlFor="toppings">
          Toppings: Plain
          <input
            id="toppings1"
            type="checkbox"
            name="addOns"
            value={formState.name}
            onChange={handleChange}
          />
          <h3> Select Your Cheese: </h3>
          Chedder
          <input
            id="toppings2"
            type="checkbox"
            name="addOns"
            onChange={handleChange}
          />
          Cheese
          <input
            id="toppings3"
            type="checkbox"
            name="addOns"
            onChange={handleChange}
          />
          Three Cheese
          <input
            id="toppings4"
            type="checkbox"
            name="addOns"
            onChange={handleChange}
          />
          ExtraCheese
          <input
            id="toppings5"
            type="checkbox"
            name="addOns"
            onChange={handleChange}
          />
          <h3> Select Your Meat: </h3>
          Pepporoni
          <input
            id="toppings6"
            type="checkbox"
            name="addOns"
            onChange={handleChange}
          />
          Sausage
          <input
            id="toppings7"
            type="checkbox"
            name="addOns"
            onChange={handleChange}
          />
          Canadian Bacon
          <input
            id="toppings8"
            type="checkbox"
            name="addOns"
            onChange={handleChange}
          />
          Spicy Italian Sausage
          <input
            id="toppings9"
            type="checkbox"
            name="addOns"
            onChange={handleChange}
          />
          GrilledChicken
          <input
            id="toppings10"
            type="checkbox"
            name="addOns"
            onChange={handleChange}
          />
          <h3> Select Other Toppings: </h3>
          Onions
          <input
            id="toppings11"
            type="checkbox"
            name="addOns"
            onChange={handleChange}
          />
          Green Peppers
          <input
            id="toppings12"
            type="checkbox"
            name="addOns"
            onChange={handleChange}
          />
          Diced Tomatoes
          <input
            id="toppings13"
            type="checkbox"
            name="addOns"
            onChange={handleChange}
          />
          Black Olives
          <input
            id="toppings14"
            type="checkbox"
            name="addOns"
            onChange={handleChange}
          />
          Roasted Garlic
          <input
            id="toppings15"
            type="checkbox"
            name="addOns"
            onChange={handleChange}
          />
          Artichoke Hearts
          <input
            id="toppings16"
            type="checkbox"
            name="addOns"
            onChange={handleChange}
          />
          Pineapple
          <input
            id="toppings17"
            type="checkbox"
            name="addOns"
            onChange={handleChange}
          />
        </label>

        <h3>Any Special Instructions?</h3>

        <label htmlFor="instructions">
          Special Instructions:
          <textarea name="instructions" />
        </label>

        <button disabled={buttonDisabled}>Submit</button>
      </form>
    </div>
  );
};

export default PizzaForm;
