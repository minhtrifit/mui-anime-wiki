import React from "react";
import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  styled,
  alpha,
  InputBase,
  Button,
  Stack,
  Snackbar,
  Alert as MuiAlert,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import MyContext from "./MyContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const SearchBar = styled(InputBase)(({ theme }) => ({
  color: "#fff",
  borderRadius: "5px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Nav = () => {
  // let navigate = useNavigate();
  const {
    handleNavigation,
    search,
    setSearch,
    handleSearch,
    openSearchAlert,
    handleCloseSearchAlert,
  } = useContext(MyContext);
  return (
    <Box>
      <Snackbar
        open={openSearchAlert}
        autoHideDuration={6000}
        onClose={handleCloseSearchAlert}
      >
        <Alert
          onClose={handleCloseSearchAlert}
          severity="error"
          sx={{ width: "100%" }}
        >
          Fill search bar before search!
        </Alert>
      </Snackbar>
      <AppBar position="relative">
        <Typography
          variant="h5"
          p={1}
          sx={{
            fontWeight: 600,
            textAlign: "center",
            display: {
              xs: "block",
              sm: "none",
            },
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={(e) => {
            handleNavigation();
          }}
        >
          MyAnimeList
        </Typography>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              display: {
                xs: "none",
                sm: "block",
              },
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={(e) => {
              handleNavigation();
            }}
          >
            MyAnimeList
          </Typography>
          <Stack direction="row" spacing={3}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <SearchBar
                placeholder="Search with format: id category"
                inputProps={{ "aria-label": "search" }}
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </Search>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#2f92ed",
              }}
              onClick={(e) => {
                handleSearch();
              }}
            >
              Search
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
