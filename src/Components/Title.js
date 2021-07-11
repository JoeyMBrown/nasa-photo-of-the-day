import React from "react";
import "../ComponentStyles/Title.css"

export default function Title({title, media_type}) {
    return media_type === "image" ? <h1 class="title">{title}</h1> : <h1 class="title">Find the Moon</h1>
}