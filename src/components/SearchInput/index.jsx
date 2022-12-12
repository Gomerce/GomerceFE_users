import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProducts } from "../../actions/products";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  customSearchIcon,
} from "./styles";

const SearchInput = () => {
  const [searchWord, setSearchWord] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchProduct = () => {
    if (searchWord.trim()) {
      // dispatch(getSearchProduct(searchWord));
      dispatch(getProducts());
      setSearchWord("");
      navigate(`/products/search?searchTerm=${searchWord || "none"}`);
    } else {
      navigate("/");
    }
  };
  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      searchProduct();
    }
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon sx={customSearchIcon} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </Search>
  );
};

export default SearchInput;
