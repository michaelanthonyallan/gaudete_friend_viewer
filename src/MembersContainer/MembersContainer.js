import React, { useState } from 'react';
import Member from '../Member/Member';

export default function MembersContainer(props){
    const [member, setMember] = useState("")

    function selectNewMember(){
        let randomNumber = (Math.floor(Math.random() * Math.floor(props.gaudete.length)))
        setMember(props.gaudete[randomNumber])
    }





    return(
        <div>
            <button onClick={selectNewMember}>Get a Friend</button>
            {member&& (
            <Member member={member}></Member>
            )}
        </div>
    )
}