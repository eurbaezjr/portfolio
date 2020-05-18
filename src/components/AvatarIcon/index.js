import React from "react";
import "./style.css";
import Avatar from 'react-avatar';

function AvatarIcon(props) {

console.log(props.githubHandle)

    return (
        <div>
        <Avatar className='avatarIcon' size={210} round='250px' 
        src="https://avatars3.githubusercontent.com/u/54389104?s=400&u=cec114d65eb42f938228661b62e5526229e0bd33&v=4"/>
        </div>
    );
}

export default AvatarIcon;
