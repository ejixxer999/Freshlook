import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const ReviewsList = ({ reviews }) => {
  const [firstname, setFirstName] = useState("")
    const [service, setService] = useState("")
    const [content, setContent] = useState("")
    const classes = useStyles();

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

}

  const reviewCards = reviews.map(review =>
    <ReviewCard key={ review.id } review={ review } /> 
    )

  return (
    <div>
   <List component="nav" aria-label="secondary mailbox folders">
    { reviewCards }
   </List>
   <br/> 
      <h2>Leave a Review</h2>
      <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleNameChange} value={firstname} placeholder="firstname" />
          <br/>
          <input type="text" onChange={handleServiceChange} value={service} placeholder="type of service" />
          <br/>
          <textarea type="text" onChange={handleContentChange} value={content} placeholder="write you review here" />
          <br/>
          <button type="submit">Submit</button>
          
      </form>
   </div>
  )
}

export default ReviewsList