import React from "react"
import star from '../images/star.png'

export default function Card(props) {
    let badgeText
    if (props.obj.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.obj.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--image" src={require(`../images/${props.obj.coverImg}`)}/>
            <div className="card--stats">
                <img className="card--star" src={star} />
                <span>{props.obj.rating}</span>
                <span className="gray">({props.obj.reviewCount}) • </span>
                <span className="gray">{props.obj.location}</span>
            </div>
            <p>{props.obj.description}</p>
            <p><span className="bold">From ${props.obj.price}</span> / person</p>
        </div>
  )
}