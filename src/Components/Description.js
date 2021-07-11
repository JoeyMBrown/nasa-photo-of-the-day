import React from "react";
import "../ComponentStyles/Description.css"

export default function Description({description, media_type}) {
    return (
        <div class="description">
            {
            media_type === "image" ? <p class="description-text">{description}</p> : <p class="description-text">Where's the Moon? Somewhere in this image, the Earth's Moon is hiding.  The entire Moon is visible, in its completely full phase, in plain sight. Even the photographer's keen eye couldn't find it even though he knew exactly where to look -- only the long exposure of his camera picked it up -- barely.  Although by now you might be congratulating yourself on finding it, why was it so difficult to see? For one reason, this photograph was taken during a total lunar eclipse, when the Earth's shadow made the Moon much dimmer than a normal full Moon. For another, the image, taken in Colorado, USA, was captured just before sunrise. With the Moon on the exact opposite side of the sky from the Sun, this meant that the Sun was just below the horizon, but still slightly illuminating the sky. Last, as the Moon was only about two degrees above the horizon, the large volume of air between the camera and the horizon scattered a lot of light away from the background Moon. Twelve minutes after this image was acquired in 2012, the Sun peeked over the horizon and the Moon set.</p>
            }
        </div>
    )
}