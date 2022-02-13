import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ReviewCard = ({ review }) => {
  return (
    <div>
    <ListItem button>
        <ListItemText primary={ review.firstName } secondary={review.service} />
  </ListItem>
  </div>
  )
}

export default ReviewCard