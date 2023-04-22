import React from "react";
import '../styles/searchbar.css'
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
  return (
    <div style={{ width: '100%', height: '70px', display: 'flex', alignItems: 'end', justifyContent: 'center' }}>
      <div className="searchbox">
        <input type="text" placeholder="Search here..." required className="input-text" />
        <div className="search-button"><SearchIcon fontSize="large" /></div>
      </div>
    </div>
  );
}
