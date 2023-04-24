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
    const [currTime, setCurrTime] = useState({
        min: "",
        sec: "",
    });
    const [seconds, setSeconds] = useState();
    useEffect(() => {
        const sec = duration / 1000;
        const min = Math.floor(sec / 60);
        const secRemain = Math.floor(sec % 60);
        const time = {
            min: min,
            sec: secRemain
        };
        const interval = setInterval(() => {
            if (sound) {
                setSeconds(sound.seek([])); // setting the seconds state with the current state
                const min = Math.floor(sound.seek([]) / 60);
                const sec = Math.floor(sound.seek([]) % 60);
                setCurrTime({
                    min,
                    sec,
                });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [sound]);

    return (
        <div className="player-box">
            <div className="player-img" style={{ backgroundImage: `url(${imgUrl})` }}></div>
            <div className="player-buttons">
                <SkipPreviousIcon fontSize="large" />
                <div style={{ cursor: 'pointer' }} onClick={() => SongPlay()}>{!isPlaying ? <PlayArrowIcon fontSize="large" /> : <PauseIcon fontSize="large" />}</div>
                <SkipNextIcon fontSize="large" />
            </div>
            <div className="player-slider">
                <div className="">{currTime.min}:{currTime.sec < 10 ? `0${currTime.sec}` : `${currTime.sec}`}</div>
                <input
                    className="play-slider"
                    type="range"
                    min="0"
                    max={duration / 1000}
                    default="0"
                    value={seconds}

                    onChange={(e) => {
                        sound.seek([e.target.value]);
                    }}

                />

                <div className="time">{Math.floor(duration / 1000 / 60)}:{Math.floor(duration / 1000 % 60) < 10 ? `0${Math.floor(duration / 1000 % 60)}` : `${Math.floor(duration / 1000 % 60)}`}</div>
            </div>

        </div>
    )
};