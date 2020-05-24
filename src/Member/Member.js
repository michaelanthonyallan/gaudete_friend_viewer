import React, { useState } from 'react'

export default function Member(props){
    const [number, setFlavorTextNumber] = useState(0)

    function changeFlavorText(){
        let numberOfText = (Math.floor(Math.random() * Math.floor(props.member.flavorText.length)))
        setFlavorTextNumber(numberOfText)
    }


    return(
        <div>
            <p>Name: {props.member.name}</p>
            <p>Age: {props.member.age}</p>
            <br></br>
            <br></br>
            <img src={props.member.image} alt={props.member.name}/>
            <br></br>
            <br></br>
            <p className="flavor-text">{props.member.flavorText[`${number}`]}</p>
            <button onClick={changeFlavorText}>Change Flavor Text!</button>
        </div>
    )
}