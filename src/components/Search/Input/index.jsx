import React from "react";
import "./Input.scss";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    border: "1px solid #E6E6E6;",
    width: "100%",
    "::-webkit-input-placeholder": "31px",
  },
});

const SearchInput = () => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.root}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      placeholder="Search for applicant"
      variant="outlined"
      size="medium"
    />
  );
};

export default SearchInput;
