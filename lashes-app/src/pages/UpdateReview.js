import Review from "./Review"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"


const UpdateReview = () => {
    const [title, setTitle] = useState("")
    const [rating, setRating] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [id, setId] = useState("")

    let navigate = useNavigate

    let index = Review.map(function(e){
        return e.id
    }).indexOf(id)

    const handlesubmit =(e) => {
        e.preventDefault()
        
        let a = Review[index]
        a.title = title;
        a.rating = rating;
        a.description = description
        a.image = image
        navigate('/review')
    }

    useEffect(() => {
        setTitle(localStorage.getItem('title'))
        setRating(localStorage.getItem('rating'))
        setDescription(localStorage.getItem('description'))
        setImage(localStorage.getItem('image'))
        setId(localStorage.getItem('id'))
    },[])

    return(
        <div>
             <form onSubmit={handlesubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
        />
        <label htmlFor="rating">Rating:</label>
        <input
          type="text"
          id="rating"
          value={rating}
        />
        <label htmlFor="decription">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
        />
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          id="image"
          value={image}
        />
      </form> 
        </div>
    )
}
 export default UpdateReview;