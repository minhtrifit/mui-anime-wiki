import React from "react";
import {
  Grid,
  styled,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Card2 = (props) => {
  const { item, detail, handleViewDetail } = props;
  const [expanded, setExpanded] = React.useState(false);
  // console.log(item);
  // console.log(detail);

  const summaryDate = (str) => {
    const subStr = str.split("T");
    const newDate = subStr[0];
    return newDate;
  };

  const summaryContent = (str) => {
    const newContent = str.slice(0, 200);
    return newContent;
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        width: "80%",
        // backgroundColor: "red",
        margin: "10px 0px",
      }}
    >
      <Grid container p={2} columns={{ xs: 5, sm: 12 }}>
        <Grid item xs={3} pr={2}>
          <CardMedia
            component="img"
            height={180}
            image={detail.images.jpg.image_url}
            alt={detail.mal_id}
          />
        </Grid>
        <Grid item xs={8}>
          <Stack p={1}>
            <Typography variant="h5" color="primary" fontWeight={500}>
              {detail.title}
            </Typography>
            {/* <Typography variant="h6" color="secondary">
              ID: {detail.mal_id}
            </Typography> */}
            <Typography
              href={item.user.url}
              color="gray"
              fontSize={14}
              mt={1}
              mb={2}
              textAlign="justify"
            >
              Description: {summaryContent(item.content)}...
            </Typography>
            <Typography
              component="a"
              href={item.user.url}
              sx={{
                textDecoration: "none",
                color: "#000",
                "&:hover": {
                  color: "#4287f5",
                },
              }}
            >
              By: {item.user.username}
            </Typography>
            <Button
              variant="contained"
              sx={{
                marginTop: "5px",
                width: "150px",
              }}
              onClick={(e) => handleViewDetail(detail.mal_id)}
            >
              View More
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Date: {summaryDate(item.date)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph textAlign="justify">
            {item.content}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Card2;
