import React from "react";

export default function BackgroundImage(props) {
    let hours = props.data.date.getHours();
    if (hours < 12) {
        return (
            <img
                className="card-img"
                src="https://i.ibb.co/WWnqSVg/weatherbackground1.png"
                alt="Card"
            />
        );
    } else if (hours < 20) {
        return (
            <img
                className="card-img"
                src="https://i.ibb.co/56Jyd9q/weatherbackground2.png"
                alt="Card"
            />
        );
    } else {
        return (
            <img
                className="card-img"
                src="https://i.ibb.co/kJqVRNz/weatherbackground3.png"
                alt="Card"
            />
        );
    }
}