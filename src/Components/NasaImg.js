import React from "react";
//import "../ComponentStyles/NasaImg.css";
import styled from "styled-components";


export default function NasaImg ({hdurl, title, media_type}) {
    const StyledImg = styled.img`
    width: 75%;
    border-radius: 5px;
    `;
    const ImgContainer = styled.div`
    margin-top: 3%;
    `;
    console.log(StyledImg);
    return (
        <ImgContainer>
        {
            media_type !== "image" ? <StyledImg src="https://apod.nasa.gov/apod/image/2107/spotthemoon_westlake_2128.jpg" alt="Find the Moon from NASA's daily image API (7/11/21)" />  : <StyledImg src={hdurl} alt={title + "  from NASA's image of the day API"}/>
        }
        </ImgContainer>
    )
}