import React from "react";
//import "../ComponentStyles/Date.css";
import styled from "styled-components";

const CurrentDate = styled.h2`
    font-family: 'Merriweather', serif;
`;

export default function Date({date, media_type}) {
    return media_type === "image" ? <CurrentDate>{date}</CurrentDate> : <CurrentDate>2021-07-11 la</CurrentDate>
}