import React from "react";

export default function NasaImg ({hdurl, title, media_type}) {
    return (
        <div>
        {
            media_type !== "image" ? <img src="https://apod.nasa.gov/apod/image/2107/spotthemoon_westlake_2128.jpg" alt="Find the Moon from NASA's daily image API (7/11/21)" />  : <img src={hdurl} alt={title + "  from NASA's image of the day API"}></img>
        }
        </div>
    )
}