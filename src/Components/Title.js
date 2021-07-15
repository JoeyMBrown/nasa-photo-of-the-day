import React from "react";
//import "../ComponentStyles/Title.css"
import styled from "styled-components";

export default function Title({title, media_type}) {
    const StyledTitle = styled.h1`
        font-family: 'Merriweather', serif;
    `;
    return media_type === "image" ? <StyledTitle>{title}</StyledTitle> : <StyledTitle>Find the Moon</StyledTitle>
}