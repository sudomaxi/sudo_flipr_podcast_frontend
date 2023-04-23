import React from "react";
import '../styles/player.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { Slider } from "@mui/material";

export default function Player() {
    let imgUrl = 'https://images.unsplash.com/photo-1601312378427-822b2b41da35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGlhbm8lMjBrZXlib2FyZHxlbnwwfHwwfHw%3D&w=1000&q=80'
    return (
        <div className="player-box">
            <div className="player-img" style={{ backgroundImage: `url(${imgUrl})` }}></div>
            <div className="player-buttons">
                <SkipPreviousIcon fontSize="large" />
                <PlayCircleIcon fontSize="large" />
                <SkipNextIcon fontSize="large" />
            </div>
            <div className="player-slider">
                <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" style={{ color: 'white' }} />
            </div>

        </div>
    )
};