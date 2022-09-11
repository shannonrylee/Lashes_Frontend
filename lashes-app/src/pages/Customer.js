// import react from 'react'
// import { useEffect, useState } from "react";
// import axios from "axios";

// const Customer = () => {
//   const [customer, setCustomer] = useState([]);
//   const initialState = {
//     name: "",
//     email: "",
//     address: "",
//   };
//   const [formState, setFormState] = useState(initialState);
//   const [submitted, setSubmitted] = useState(true);

//   useEffect(() => {
//     const getCustomer = async () => {
//       try {
//         if (submitted) {
//           let res = await axios.get("http://localhost:3001/api/customer");

//           setCustomer(res.data.customer);
//           setSubmitted(false);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getCustomer();
//   }, [submitted]);

//   const handlechange = (e) => {
//     setFormState({ ...formState, [e.target.id]: e.target.value });
//   };
//   const handlesubmit = async (e) => {
//     e.preventDefault();
//     let res = await axios.post("http://localhost:3001/api/customer", formState);
//     console.log(res.data.customer);
//     console.log(formState);
//     setFormState(initialState);
//     setSubmitted(true);
//     e.target.reset();
//   };

//   return (
//     <div>
//     <h1>Current Bookings</h1>
//     <form onSubmit={handlesubmit}>
//       <label htmlFor="name">Name:</label>
//       <input
//         type="text"
//         id="name"
//         onChange={handlechange}
//         value={formState.subject}
//       />
//       <label htmlFor="date">Date:</label>
//       <input
//         type="text"
//         id="date"
//         onChange={handlechange}
//         value={formState.subject}
//       />
//       <button type="sumbit">Submit</button>
//     </form>
//     <label hmtlFor="delete"></label>
//   </div>
// );
// };
// export default Customer;