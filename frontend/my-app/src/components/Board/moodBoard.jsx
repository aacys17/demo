import React from 'react';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import { BoardContainer, BoardDesign } from './moodboardWrapper';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const MoodBoard = ({ title, price, Description, _id, color }) => {
  const history = useHistory();
  const handleExpandClick = (id) => {
    history.push('/singleboard/' + id);
  };
  return (
    <BoardContainer>
      <BoardDesign key={_id} sx={{ maxWidth: 300 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"></Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title = "Clothes"
        />
        <CardMedia
          component="img"
          height="194"
          image="\images\image.jpg"
          alt={title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive car is a perfect runaway for people to go somewhere
            far. Don't miss out the oppurtinity to grab this perfect piece of
            beauty.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          {/* <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}
          <ExpandMore
            onClick={() => handleExpandClick(_id)}
            aria-label="see more"
          >
            <Button size="small">See More</Button>
          </ExpandMore>
        </CardActions>
       
      </BoardDesign>
    </BoardContainer>
  );
};

export default MoodBoard;
