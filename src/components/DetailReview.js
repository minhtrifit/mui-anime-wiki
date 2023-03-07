import React from "react";
import {
  Typography,
  Stack,
  ListItem,
  ListItemAvatar,
  Avatar,
  Collapse,
  Card,
  CardActions,
  CardContent,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import { EmojiEmotions, Summarize, Favorite } from "@mui/icons-material";

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

const DetailReView = (props) => {
  const [expanded, setExpanded] = React.useState(false);
  const { item } = props;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const summaryReview = (str) => {
    return str.slice(0, 300);
  };

  return (
    <>
      <Card
        sx={{
          width: "100%",
          // backgroundColor: "red",
          margin: "10px 0px",
        }}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt={item.user.username}
              src={item.user.images.jpg.image_url}
              sx={{ width: 56, height: 56 }}
            />
          </ListItemAvatar>
          <Stack pl={2}>
            <Typography variant="h6" color="primary" fontSize={14}>
              {item.user.username}
            </Typography>
            <Typography
              variant="h6"
              color="gray"
              fontSize={12}
              textAlign="justify"
            >
              {summaryReview(item.review)}...
            </Typography>
            <Stack mt={2} direction="row">
              <Stack direction="row">
                <Typography color="#FDD36A">
                  <EmojiEmotions />
                </Typography>
                <Typography color="primary" fontWeight={500} pl={1}>
                  {item.reactions.nice}
                </Typography>
              </Stack>
              <Stack direction="row" ml={2}>
                <Typography color="error">
                  <Favorite />
                </Typography>
                <Typography color="primary" fontWeight={500} pl={1}>
                  {item.reactions.love_it}
                </Typography>
              </Stack>
              <Stack direction="row" ml={2}>
                <Typography color="#000">
                  <Summarize />
                </Typography>
                <Typography color="primary" fontWeight={500} pl={1}>
                  {item.reactions.overall}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </ListItem>
        <CardActions disableSpacing>
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
              {item.review}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      {/* <Divider variant="inset" component="li" /> */}
    </>
  );
};

export default DetailReView;
