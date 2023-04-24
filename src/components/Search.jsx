import React, { useState } from "react";
import "../styles/searchbar.css";
import SearchIcon from "@mui/icons-material/Search";
import SearchArray from './SearchedVideos'
import CloseIcon from '@mui/icons-material/Close';
export default function Search() {
  const [isSearching, setSearching] = useState(false)
  return (
    <div
      style={{
        width: "100%",
        height: "fit-content",
        display: "flex",
        marginTop: "20px",
        flexDirection: 'column'
        // alignItems: "end",
        // justifyContent: "center",
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div className="search-button" onClick={() => setSearching(!isSearching)}>
          {!isSearching ? <SearchIcon fontSize="large" /> : <CloseIcon fontSize="large" />}
        </div>
        <div className="searchbox">
          <input
            type="text"
            placeholder="Search here..."
            required
            className="input-text"
          />
        </div>
      </div>
      {isSearching ? <SearchArray /> : <></>}
    </div>
  );
}
