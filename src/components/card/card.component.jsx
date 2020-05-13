import './card.styles.css'
import React from "react";

export const Card = (props) => {
    return <div className="card-container">
        {/*<img alt='monsters' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>*/}
        <img alt='monsters' src={props.monster.avatar} />
        <h2>{`${props.monster.first_name} ${props.monster.last_name}`}</h2>
        <p> {props.monster.email}</p>
    </div>
}