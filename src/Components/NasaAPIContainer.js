import React from "react";
import NasaImg from "./NasaImg";

export default function NasaAPIContainer(props) {
    return (
        <div>
            <NasaImg hdurl={props.nasaData.hdurl} title={props.nasaData.title} media_type={props.nasaData.media_type}/>
        </div>
    )
}