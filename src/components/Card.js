import React from "react"

export default function Card(props) {
    return (
        <div className="container">
            <div className="card">
                <img className="card--img" src={props.item.imageUrl} alt="nature sight"/>
                <div className="card--content">
                    <div className="card--intro">
                        <i className="fas fa-map-marker-alt card--marker"></i>
                        <p className="card--location">{props.item.location}</p>
                        <a className="card--maps" href={props.item.googleMapsUrl}>View on Google Maps</a>
                    </div> 
                    
                    <div className="card--main">
                        <h1 className="card--title">{props.item.title}</h1>
                        <h4 className="card--dates">{props.item.startDate} - {props.item.endDate}</h4>
                        <p className="card--description">{props.item.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}