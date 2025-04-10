import React, {useState} from 'react';

export function MyComponent4 () {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood () {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods((f) => [...f, newFood]);
  }

  function handleRemoveFood (index) {
    setFoods(foods.filter((_, i) => i !== index))
  }

  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name"/>
      <button onClick={handleAddFood}>Add food</button>
    </div>
  )
}

export function MyComponent3(){
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang"
  });

  function handleYearChange(event) {
    setCar(() => ({...car, year: event.target.value}))
  }
  function handleMakeChange(event) {
    setCar(() => ({...car, make: event.target.value}))
  }
  function handleModelChange(event) {
    setCar(() => ({...car, model: event.target.value}))
  }

  return(
    <div>
      <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

      <input type="number" value={car.year} onChange={handleYearChange}/><br/>
      <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
      <input type="text" value={car.model} onChange={handleModelChange}/><br/>
    </div>
  )

}

export function MyComponent2(){
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");


  function handleNameChange(event){
    setName(event.target.value);
  }
  function handleQuantityChange(event){
    setQuantity(event.target.value);
  }
  function handleCommentChange(event){
    setComment(event.target.value);
  }
  function handlePaymentChange(event){
    setPayment(event.target.value);
  }
  function handleShippingChange(event){
    setShipping(event.target.value);
  }

  return(
    <div>
      <input value={name} onChange={handleNameChange}/>
      <p>Name: {name}</p>

      <input value={quantity} type="number" onChange={handleQuantityChange}/>
      <p>Quantity: {quantity}</p>

      <textarea value={comment} placeholder="Enter delivery instructions" onChange={handleCommentChange}/>
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">SGiftcard</option>
      </select>
      <p>Payment: {payment}</p>

      <label>
        <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
        Pick up
      </label><br/>
      <label>
        <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  )

}

function MyComponent(){
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Spongebob");
  }

  const incrementAge = () => {
    setAge(age + 2);
  }

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  }

  return(
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Name: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>

      <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployedStatus}>Toggle Employed Status</button>
    </div>
    
  )
}

export default MyComponent;