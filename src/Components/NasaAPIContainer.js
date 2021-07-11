import React, {useState, useEffect} from "react";
import NasaImg from "./NasaImg";

export default function NasaAPIContainer(props) {
    return (
        <div>
            <NasaImg hdurl={props.nasaData.hdurl} title={props.nasaData.title}/>
        </div>
    )
}