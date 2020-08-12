import React from "react";
import "./Input.scss";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import styled from "styled-components";

const StyledTextField = styled(TextField)`
  & ::-webkit-input-placeholder {
    font-size: 1.4rem;
  }
`;

const SearchInput = () => {
  return (
    <div>
      <StyledTextField
        className="search-input"
        variant="outlined"
        placeholder="Search for applicant"
        InputProps={{
          style: { fontSize: "1.4rem" },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchInput;
