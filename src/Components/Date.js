import React from "react";
import "../ComponentStyles/Date.css";

export default function Date({date, media_type}) {
    return media_type === "image" ? <h2 class="date">{date}</h2> : <h2 class="date">2021-07-11 la</h2>
}