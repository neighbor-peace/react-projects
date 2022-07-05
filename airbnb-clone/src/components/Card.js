import React from "react"
import star from '../images/star.png'

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={require(`../images/${props.coverImg}`)}/>
            <div className="card--stats">
                <img className="card--star" src={star} />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.description}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
  )
}