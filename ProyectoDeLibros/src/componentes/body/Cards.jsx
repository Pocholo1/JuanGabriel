import React from "react";
import './card.css'

export default function Cards(props){
    return(
        <>
            <div className="card2">
                <img src={props.items.image} alt="logo" />
                
                <div>
                    <h5>{props.items.title}</h5>
                    <span className="fecha">Precio<br></br>{props.items.precio}</span>
                    <p>{props.items.description}</p>
                    <button type="button" className="btn btn-outline-primary">Comprar</button>
                </div>
            </div>
        </>
    )
}