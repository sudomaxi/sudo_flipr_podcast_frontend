import React from "react";
import { useState, useEffect } from "react";
import useSound from "use-sound";
import song from '../assets/Havana.mp3'
import '../styles/player.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { Slider } from "@mui/material";
import PauseIcon from '@mui/icons-material/Pause';

export default function Player() {
    let imgUrl = 'https://images.unsplash.com/photo-1601312378427-822b2b41da35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGlhbm8lMjBrZXlib2FyZHxlbnwwfHwwfHw%3D&w=1000&q=80'
    const [isPlaying, setIsPlaying] = useState(false);
    const [play, { pause, duration, sound }] = useSound(song);
    const SongPlay = () => {
        if (isPlaying) {
            pause(); // this will pause the audio
            setIsPlaying(false);
        } else {
            play(); // this will play the audio
            setIsPlaying(true);
        }
    };
    return (
        <div className="player-box">
            <div className="player-img" style={{ backgroundImage: `url(${imgUrl})` }}></div>
            <div className="player-buttons">
                <SkipPreviousIcon fontSize="large" />
                <div style={{ cursor: 'pointer' }} onClick={() => SongPlay()}>{!isPlaying ? <PlayArrowIcon fontSize="large" /> : <PauseIcon fontSize="large" />}</div>
                <SkipNextIcon fontSize="large" />
            </div>
            <div className="player-slider">
                <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" style={{ color: 'white' }} />
            </div>

        </div>
    )
};