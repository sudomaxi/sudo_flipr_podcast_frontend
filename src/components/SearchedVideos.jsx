import React from "react";
import logo from "../assets/bg.jpg";

export default function SearchedVideos() {
    const searchArray = [
        {
            title: "AbcRounded",
            artist: "AbcRounded",
        },
        {
            title: "AbcRounded",
            artist: "AbcRounded",
        },
        {
            title: "AbcRounded",
            artist: "AbcRounded",
        },
        {
            title: "AbcRounded",
            artist: "AbcRounded",
        },
        {
            title: "AbcRounded",
            artist: "AbcRounded",
        },
    ];
    return (
        <div className="continue">
            <h1>Related Searches</h1>
            <div
                className="scroll"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingBottom: "20px",
                    overflowX: "scroll",
                }}
            >
                {searchArray.map((index) => {
                    return (
                        <div className="slides">
                            <img src={logo} alt="image" />
                            <h3>{index.title}</h3>
                            <h4>{index.artist}</h4>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
