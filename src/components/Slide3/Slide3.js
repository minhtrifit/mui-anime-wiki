import { React, useContext } from "react";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import MyContext from "../MyContext";

const Slide3 = (props) => {
  const { title, list } = props;
  const { handleViewCharacter } = useContext(MyContext);
  // console.log(list);

  return (
    <Box p={2}>
      <Typography variant="h6" fontWeight={500} fontSize={15} mb={1}>
        {title}
      </Typography>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        {list.map((item, index) => {
          return index !== list.length - 1 ? (
            <Box
              key={index}
              onClick={(e) => {
                handleViewCharacter(item.mal_id);
              }}
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    alt={item.mal_id.toString()}
                    src={item.images.jpg.image_url}
                  ></Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={`${item.name}, (${item.name_kanji})`}
                  secondary={`Favorites: ${item.favorites}`}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </Box>
          ) : (
            <Box
              key={index}
              onClick={(e) => {
                handleViewCharacter(item.mal_id);
              }}
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    alt={item.mal_id.toString()}
                    src={item.images.jpg.image_url}
                  ></Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={`${item.name}, (${item.name_kanji})`}
                  secondary={`Favorites: ${item.favorites}`}
                />
              </ListItem>
            </Box>
          );
        })}
      </List>
    </Box>
  );
};

export default Slide3;
