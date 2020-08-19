import React from 'react'

function Card({image,name,weight}){

    return(
        <div>
            <img src= {image} alt=""/>
            <ul>
                <li>{name}</li>
                <li>{weight}</li>
            </ul>
        </div>
    );
}

export default Card;