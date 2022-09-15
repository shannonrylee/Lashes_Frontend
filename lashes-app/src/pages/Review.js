import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UpdateReview from "./UpdateReview";

const Review = () => {
  let navigate = useNavigate();
  const [review, setReview] = useState([]);
  const initialState = {
    title: "",
    rating: "",
    description: "",
    image: "",
  };
  const [formState, setFormState] = useState(initialState);
  const editInitialState = {
    title: "",
    rating: "",
    description: "",
    image: "",
  };
  const [edit, setEdit]= useState(editInitialState)
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
  }
  const handleEdit = (e) => {
    setEdit({ ...edit, [e.target.id]: e.target.value });
  }
  const handlesubmit = async (e) => {
    e.preventDefault();
    let res = await axios.post("http://localhost:3001/api/review", formState);
    console.log(res.data.reviews);
    console.log(formState);
    setFormState(initialState);
    setSubmitted(true);
    e.target.reset();
  };
  // const handleUpdate = async (_id) => {
  //   let res = await axios
  //     .put(`http://localhost:3001/api/review/${_id}`, formState)
  //     .then((res) => console.log(res.data))
  //     .catch((error) => console.log(error));
  // };

  const handleDelete = async (_id) => {
    let res = await axios
      .delete(`http://localhost:3001/api/review/${_id}`)
      .catch((error) => console.log(error));
    console.log(res.data.reviews);
    navigate("/review");
  };
  //  const handleEdit = (id, title, rating, description, image) => {
  //     localStorage.setItem('title',title)
  //     localStorage.setItem('rating',rating)
  //     localStorage.setItem('description',description)
  //     localStorage.setItem('image',image)
  //     localStorage.setItem('id',id)
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
        <button type="submit">Submit</button>
      </form>
      <div>
        {review.map((reviews) => (
          <div className="update" key={reviews._id}>
            <h1>{reviews.title}</h1>
            <h1>{reviews.rating}</h1>
            <h1>{reviews.description}</h1>
            <h1>{reviews.image}</h1>
            <form>
                  <label htmlFor="title">Title: </label>
                  <input type="text" id="title" onChange={handleEdit} value={edit.title}/>
                  <label htmlFor="rating">Rating:</label>
                  <input type="text" id="rating" onChange={handleEdit} value={edit.rating}/>
                  <label htmlFor="description">Description:</label>
                  <input type="text" id="description" onChange={handleEdit} value={edit.description}/>
                  <label htmlFor="image">Image:</label>
                  <input type="text" id="image" onChange={handleEdit} value={edit.image}/>
                  <button type="submit" onClick={async () => {
                    await axios({
                      method: 'put',
                      url: `http://localhost:3001/api/review/${reviews._id}`,
                      data: {
                        title: edit.title,
                        rating: edit.image,
                        description: edit.description,
                        image: edit.image
                      }
                    })
                  }}>Edit</button>
                </form>
            <button
              className="delete-button"
              onClick={() => {
                handleDelete(reviews._id);
              }}
            >
              Delete
            </button>
            {/* <button
              type="submit"
              onClick={() => {
                handleUpdate(reviews._id);
              }}
            >
              Edit
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Review;
