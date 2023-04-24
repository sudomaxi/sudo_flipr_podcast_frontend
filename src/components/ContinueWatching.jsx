import React from "react";
import logo from "../assets/bg.jpg";
import { AbcOutlined } from "@mui/icons-material";
import { useEffect } from "react";
import axios from "axios";
import CONST from "../constant";
import { useState } from "react";

export default function ContinueWatching() {
  const [trending, settrending] = useState([]);



  
  useEffect(() => {



    function getPodcasts(){


     var accessToken= localStorage.getItem("access-token")
     var userId= localStorage.getItem("userId")



      axios.get(CONST.API+`/api/views/user/6444ab93f63afc0d3d8d1dab`, {
        headers: {
          'x-access-token': accessToken,
          
        }
      })
        .then(response => {
          console.log(response.data.podcasts);
          console.log("continue watching");
          settrending(response.data.podcasts);
        })
        .catch(error => {
          // handle error here
        });
      



    }
    getPodcasts();
    
  
  
  }, [])
  // const trending = [
  //   {
  //     title: "AbcRounded",
  //     artist: "AbcRounded",
  //   },
  //   {
  //     title: "AbcRounded",
  //     artist: "AbcRounded",
  //   },
  //   {
  //     title: "AbcRounded",
  //     artist: "AbcRounded",
  //   },
  //   {
  //     title: "AbcRounded",
  //     artist: "AbcRounded",
  //   },
  //   {
  //     title: "AbcRounded",
  //     artist: "AbcRounded",
  //   },
  //   {
  //     title: "AbcRounded",
  //     artist: "AbcRounded",
  //   },
  //   {
  //     title: "AbcRounded",
  //     artist: "AbcRounded",
  //   },
  //   {
  //     title: "AbcRounded",
  //     artist: "AbcRounded",
  //   },
  // ];
  return (
    <div className="continue">
      <h1>Continue Watching</h1>
      <div
        className="scroll"
        style={{
          display: "flex",
          flexDirection: "row",
          paddingBottom: "20px",
          overflowX: "scroll",
        }}
      >
        {trending.map((tmp) => {
          return (
            <div className="slides">
              <img src={logo} alt="image" />
              <h3>{tmp.title}</h3>
              <h4>{tmp.artist}</h4>
              <div>
              <h5>{tmp.podcast.views.length} views</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
