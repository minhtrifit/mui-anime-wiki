import React from "react";
import { Box, AppBar, Typography, Stack } from "@mui/material";
import { Facebook, GitHub, LinkedIn, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box mt={3}>
      <AppBar
        position="relative"
        sx={{
          height: "120px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          //   bgcolor="red"
          p={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            p={1}
            sx={{
              fontWeight: 600,
            }}
          >
            Copyright©: minhtrifit
          </Typography>
          <Stack direction="row">
            <Box
              pl={2}
              component="a"
              href="https://www.facebook.com/minhtrifit"
              color="#fff"
            >
              <Facebook fontSize="large" />
            </Box>
            <Box
              pl={2}
              component="a"
              href="https://github.com/minhtrifit"
              color="#fff"
            >
              <GitHub fontSize="large" />
            </Box>
            <Box
              pl={2}
              component="a"
              href="https://www.linkedin.com/in/lê-minh-trí-89ab94215/"
              color="#fff"
            >
              <LinkedIn fontSize="large" />
            </Box>
            <Box
              pl={2}
              component="a"
              href="https://www.youtube.com/channel/UC76ICSmHFRLTmDQeFxHdUJA"
              color="#fff"
            >
              <YouTube fontSize="large" />
            </Box>
          </Stack>
        </Stack>
      </AppBar>
    </Box>
  );
};

export default Footer;
