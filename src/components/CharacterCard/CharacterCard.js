import React from "react";
import "./CharacterCard.css";



const CharacterCard = props => (
      <img className="img-fluid" alt={props.name} src={props.image} onClick={() => props.handleClick(props.id)}/>
);

export default CharacterCard;

