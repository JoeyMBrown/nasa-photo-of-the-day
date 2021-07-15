import React from "react";
import NasaImg from "./NasaImg";
import Article from "./Article";
import styled from "styled-components";
//import "../ComponentStyles/NasaAPIContainer.css"

export default function NasaAPIContainer(props) {
    const APIContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-content: center;
        margin: 2.5% auto;
        width: 80%;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;

        ${this}: hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }
    `;
    return (
        <APIContainer>
            <NasaImg hdurl={props.nasaData.hdurl} title={props.nasaData.title} media_type={props.nasaData.media_type}/>
            <Article nasaData={props.nasaData}/>
        </APIContainer>
    )
}