import { React } from "react";
import { Grid, Box, Paper, CardMedia, Typography, Stack } from "@mui/material";

const Card3 = (props) => {
  const { item, handleDetail } = props;
  return (
    <Paper
      elevation={3}
      m={1}
      sx={{
        marginTop: "10px",
        marginBottom: "10px",
        borderRadius: "0",
        "&:hover": {
          cursor: "pointer",
        },
      }}
      onClick={(e) => {
        handleDetail(item.entry[0].mal_id);
      }}
    >
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <CardMedia
              component="img"
              image={item.entry[0].images.jpg.image_url}
              alt={item.entry[0].mal_id}
            />
          </Grid>
          <Grid item xs={8}>
            <Stack>
              <Typography
                component="span"
                color="primary"
                fontSize={12}
                fontWeight="500"
              >
                {item.entry[0].title}
              </Typography>
              <Typography
                component="span"
                color="gray"
                fontSize={10}
                fontWeight="300"
                mt={1}
              >
                {item.content}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Card3;
