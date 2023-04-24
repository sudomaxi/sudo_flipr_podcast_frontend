import React, { useState, useEffect } from "react";
import { Player } from "video-react";
import video from "../assets/video_1.mp4";
import { useParams } from "react-router";
import axios from "axios";
import CONST from "../constant";




export default function Favourites() {
  const { id } = useParams();
  const [count, setCount] = useState(0);
  const [currtime, setcurrtime] = useState()
  const [podcastId, setpodcastId] = useState()


  const handleTimeUpdate = event => {
    setcurrtime(event.target.currentTime);
 
   
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      
      
      

      async function markView(tmp){

     
       
        const data = {
        user:localStorage.getItem("userId"),
        podcast:id,
        lastWatched:currtime
    
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
          markView();



      setCount(count => count + 1);
    }, 5000);

 
    return () => clearInterval(intervalId);
  }, []);

 
  
  return (
    <div className="fav" style={{width:"70%"}} >
     <Player
        onTimeUpdate={handleTimeUpdate}
       
      >
        <source src={"https://ia903406.us.archive.org/7/items/the-toxic-crusaders-01x-04-tree-troubles/The%20Toxic%20Crusaders%20-%2001x01%20-%20The%20Making%20of%20Toxie.mp4?cnt=0"} />
      </Player>
      <h1 style={{ color: "white", paddingLeft: "20px" }}>Title</h1>
    </div>
  );
}
