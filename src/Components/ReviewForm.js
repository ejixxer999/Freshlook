import React, { useState } from "react";

const ReviewForm = ({ reviews, setReviews }) => {
    const [firstname, setFirstName] = useState("")
    const [service, setService] = useState("")
    const [content, setContent] = useState("")

    function handleNameChange(event){
        event.preventDefault()
        setFirstName(event.target.value)
    }
    function handleServiceChange(event){
        event.preventDefault()
        setService(event.target.value)
    }
    function handleContentChange(event){
        event.preventDefault()
        setContent(event.target.value)
    }
    
    
    function handleSubmit(e){
        e.preventDefault()
        const reviewData = {
            fisrtName: firstname,
            service: service,
            content: content
        }
        const newReview = [...reviews, reviewData]
        setReviews(newReview)
        setFirstName("")
        setService("")
        setContent("")
        fetch("http://localhost:3000/reviews", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reviewData),
        })
        
        
      
      }
      

  return (

     <form onSubmit={handleSubmit}>
    <input type="text" onChange={handleNameChange} value={firstname} placeholder="firstname" />
    <br/>
    <input type="text" onChange={handleServiceChange} value={service} placeholder="type of service" />
    <br/>
    <textarea type="text" onChange={handleContentChange} value={content} placeholder="write you review here" />
    <br/>
    <button type="submit">Submit</button>
    
</form>

    
  )
}

export default ReviewForm