import React from "react";
import logo from "../assets/bg.jpg";
import { AbcOutlined } from "@mui/icons-material";
import { useEffect } from "react";
import axios from "axios";
import CONST from "../constant";
import { useState } from "react";
import { useNavigate } from "react-router";


export default function Trending() {

  const [trending, settrending] = useState([]);
  const [currvid, setcurrvid] = useState("");


 async function markLike(tmp){

var userId;
var podcastId=  tmp._id;
const data = {
user:localStorage.getItem("userId"),
podcast:podcastId
};


axios.post(CONST.API+'/api/view', data, {
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => {

   console.log(response.data);

  
    console.log("then", response.status);
  })
  .catch(error => {
    console.log("error");
    // window.alert("Error Check Details")
  });




  }

  useEffect(() => {



    function getPodcasts(){


     var accessToken= localStorage.getItem("access-token")



      axios.get(CONST.API+'/api/podcasts', {
        headers: {
          'x-access-token': accessToken,
          
        }
      })
        .then(response => {
          console.log(response.data.podcasts);
          settrending(response.data.podcasts);
        })
        .catch(error => {
          // handle error here
        });
      



    }
    getPodcasts();
    
  
  
  }, [])
  
  const navigate = useNavigate();
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
      <h1>Trending</h1>
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
            <div className="slides" onClick={()=>{markLike(tmp); navigate(`/video-play/${tmp._id}/0`);}} >
              <img src={logo} alt="image" />
              <h3>{tmp.title}</h3>
              <h4>{tmp.artist}</h4>
              <div>
              <h5>{tmp.views.length} views</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
