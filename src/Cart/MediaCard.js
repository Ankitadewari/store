import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';  
function MediaCard(props) {
    const {image,category,description,price,title}=props?.item;
  return (
    <Card sx={{ maxWidth: 345, margin: '10px' }}>
    <CardMedia
      component="img"
      height="300"
      image={image}
      alt={title}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title.substring(0, 20) + "..."}
      </Typography>
      <Typography variant="h6" color="text.primary">
        {category}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description.substring(0, 70) + "..."}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">{price}</Button>
    </CardActions>
  </Card>
  )
}

export default MediaCard;