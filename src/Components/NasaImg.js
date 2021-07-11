import React from "react";

export default function NasaImg ({hdurl, title}) {
    return (
        <img src={hdurl} alt={title + " image from NASA's image of the day API"}></img>
    )
}