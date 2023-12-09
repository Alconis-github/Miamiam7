import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import BaseArea from "./BaseArea";

function SearchSection() {
    const [searchQuery, setSearchQuery] = useState("");
    const SearchBar = ({setSearchQuery}) => (
        <form >
          <TextField
            sx={{width: '500px',}}
            id="search-bar"
            onInput={(e) => {
              setSearchQuery(e.target.value);
            }}
            label="Qu'allons nous manger aujourd'hui ?"
            variant="outlined"
            placeholder="Search..."
            size="large"
          />
        <IconButton size="large" type="submit" aria-label="search" style={{ backgroundColor: '#B23E3E', borderRadius: '12px' }}>
          <SearchIcon style={{ fill: "white" }} />
        </IconButton>
        </form>
      );

    return (
        <BaseArea vheight="10vh">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </BaseArea>
    );
}



export default SearchSection