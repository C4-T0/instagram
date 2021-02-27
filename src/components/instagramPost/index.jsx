import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

import "./styles.css";

const Post = (props) => {
  console.log(props);
  const { display_url, shortcode } = props.props.node;
  const { text } = props.props.node.edge_media_to_caption.edges[0].node;
  const likes = props.props.node.edge_liked_by.count;
  const coments = props.props.node.edge_media_to_comment.count;
  const handleClick=()=>{
    window.open(`https://www.instagram.com/p/${shortcode}/`)
  }
  return (
    <Card onClick={handleClick} className="card">
      <CardActionArea>
        <img className="image" alt="" src={display_url} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton>
          <FavoriteIcon />
          {likes}
        </IconButton>
        
        <IconButton>
          <ChatBubbleIcon />
          {coments}
        </IconButton>
        
      </CardActions>
    </Card>
  );
};

export default Post;
