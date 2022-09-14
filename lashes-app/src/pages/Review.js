import { useEffect, useState } from "react";
import axios from "axios";

const Review = () => {
  const [review, setReview] = useState([]);
  const initialState = {
    title: "",
    rating: "",
    decription: "",
    image: "",
  };
  const [formState, setFormState] = useState(initialState);
  const [submitted, setSubmitted] = useState(true);

  useEffect(() => {
    const getReview = async () => {
      try {
        if (submitted) {
          let res = await axios.get("http://localhost:3001/api/review");

          setReview(res.data.reviews);
          setSubmitted(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getReview();
  }, [submitted]);

  const handlechange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post("http://localhost:3001/api/review", formState);
    console.log(res.data.reviews);
    console.log(formState);
    setFormState(initialState);
    setSubmitted(true);
    e.target.reset();
  };
  const handleUpdate = async () => {
    let res = await axios.put('http://localhost:3001/api/review${_id}', formState)
    console.log(res)
  }
//  const handleUpdate = async (_id) = {
//    let res = await axios.put('http://localhost:3001/api/review/${_id}', formState)
//    .then((res) => console.log(res.status))
//    .catch((error) => console.log(error))
//  }
 const handleDelete = async (_id) => {
  let res = await axios.delete('http://localhost:3001/api/review${_id}').catch((error) => console.log(error))
  console.log(res.data.reviews)
 }
//  const deleteRealTime = async (review)=> {
//  let index = review.indexOf(review)
//  let time = [...review]
//  time.splice[index,1]
//  setReview(review)
//  }

  return (
    <div>
      <h1>Ratings</h1>
      <form onSubmit={handlesubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          onChange={handlechange}
          value={formState.subject}
        />
        <label htmlFor="dropdown">Rating:</label>
        <input
          type="dropdown"
          id="rating"
          onChange={handlechange}
          value={formState.subject}
        />
        <label htmlFor="decription">Description:</label>
        <input
          type="text"
          id="description"
          onChange={handlechange}
          value={formState.subject}
        />
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          id="image"
          onChange={handlechange}
          value={formState.subject}
        />
        <button type="sumbit">Submit</button>
      </form>
      <div>
        {review.map((reviews) => (
          <div>
            <h1>{reviews.title}</h1>
            <h1>{reviews.rating}</h1>
            <h1>{reviews.description}</h1>
            <h1>{reviews.image}</h1>
          </div>
        ))}
      </div>
      <button className="delete-button" onClick={() => {handleDelete(review._id)}}>Delete</button>
      <button className="update-button" onClick={() => {handleUpdate(review._id)}}>Edit</button>
    </div>
  );
};
export default Review;