import React from "react";
import "./style.css";
import Avatar from 'react-avatar';

function AvatarIcon(props) {

    return (
        <div>
        <Avatar className='avatarIcon' githubHandle={props.handle} size={250} round='250px'/>
        </div>
    );
}

export default AvatarIcon;
