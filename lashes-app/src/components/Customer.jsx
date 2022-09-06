import react from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
const Customer = () => {
  const [customer, setCustomer] = useState([]);
  const initialState = {
    name: "",
    email: "",
    address: "",
  };
  const [formState, setFormState] = useState(initialState);
  const [submitted, setSubmitted] = useState(true);

  useEffect(() => {
    const getCustomer = async () => {
      try {
        if (submitted) {
          let res = await axios.get("http://localhost:3001/api/booking");

          setCustomer(res.data.bookings);
          setSubmitted(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCustomer();
  }, [submitted]);

  const handlechange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post("http://localhost:3001/api/booking", formState);
    console.log(res.data.bookings);
    console.log(formState);
    setFormState(initialState);
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <div>
    <h1>Current Bookings</h1>
    <form onSubmit={handlesubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        onChange={handlechange}
        value={formState.subject}
      />
      <label htmlFor="date">Date:</label>
      <input
        type="text"
        id="date"
        onChange={handlechange}
        value={formState.subject}
      />
      <button type="sumbit">Submit</button>
    </form>
    <div>
      {booking.map((bookings) => (
        <div>
          <h1>{bookings.name}</h1>
          <h1>{bookings.date}</h1>
        </div>
      ))}
    </div>
    <label hmtlFor="delete"></label>
    <input
      type="button"
      id="bookings"
      onChange={handlechange}
      value={formState.bookings}
    />
    <button>Checkout</button>
  </div>
);
};
export default Customer;