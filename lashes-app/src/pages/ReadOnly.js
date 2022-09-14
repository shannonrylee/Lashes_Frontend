import React from "react"
import Review from "./Review"
import { useState, useEffect } from "react"
import {v4 as uudi } from 'uuid'
import { Link, useNavigate } from "react-router-dom"


const ReadOnly = () => {
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
        
    </div>
)} 
export default ReadOnly;