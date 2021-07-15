import React from "react";
import Title from "./Title";
import Date from "./Date";
import Description from "./Description";

export default function Article(props) {
    return(
        <div>
            <Title title={props.nasaData.title} media_type={props.nasaData.media_type} />
            <Date date={props.nasaData.date} media_type={props.nasaData.media_type}/>
            <Description description={props.nasaData.explanation} media_type={props.nasaData.media_type}/>
        </div>
    )
}