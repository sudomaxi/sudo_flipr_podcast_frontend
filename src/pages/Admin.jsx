import React from "react";
import { Link } from "react-router-dom";
import Add from "../assets/add.png";
import BackupIcon from '@mui/icons-material/Backup';

export default function Admin() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Podcasts</span>
        <span className="title"></span>
        <form>
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add Thumbnail</span>
          </label>
          <input required type="text" placeholder="Title for Podcast" />
          <input required type="text" placeholder="Artist" />
          <input required type="text" placeholder="Tags" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <BackupIcon />
            <span>Add file</span>
          </label>
          <button>Add Podcast</button>
          {/* {loading && "Uploading and compressing the image please wait..."}
          {err && <span>Something went wrong</span>} */}
        </form>
      </div>
    </div>
  );
}
