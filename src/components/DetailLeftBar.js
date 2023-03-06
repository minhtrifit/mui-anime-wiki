import { React, useContext } from "react";
import {
  Box,
  Paper,
  CardMedia,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import DetailContext from "./DetailContext";

const DetailLeftBar = () => {
  const { detailData } = useContext(DetailContext);
  let checkResponse = false;
  if (detailData.mal_id) {
    checkResponse = true;
    console.log("Check data", detailData);
  }

  return (
    checkResponse === true && (
      <Paper
        elevation={2}
        sx={{
          borderRadius: "0",
          display: {
            xs: "none",
            sm: "block",
          },
        }}
      >
        <Box p={2}>
          <CardMedia
            component="img"
            image={detailData.images.jpg.image_url}
            alt={detailData.mal_id}
          />
          <List
            sx={{
              width: "100%",
              // bgcolor: "red",
              bgcolor: "background.paper",
            }}
          >
            <ListItem>
              <ListItemText
                primary="Alternative Titles:"
                secondary={`Japanese: ${detailData.title_japanese}`}
              />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Work" secondary="Jan 7, 2014" />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Vacation" secondary="July 20, 2014" />
            </ListItem>
          </List>
        </Box>
      </Paper>
    )
  );
};

export default DetailLeftBar;
