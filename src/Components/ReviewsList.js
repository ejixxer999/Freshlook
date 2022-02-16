import React, { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ReviewForm from "./ReviewForm";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const ReviewsList = () => {
  const [reviews, setReviews] = useState([])
    const classes = useStyles();

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch('http://localhost:3000/Reviews')
      const data = await response.json()
        setReviews(data)
      }
      fetchReviews()
    }, [])

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
      <ReviewForm reviews={reviews} setReviews={setReviews} />
    </div>
  )
}

export default ReviewsList