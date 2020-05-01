import React from "react";
import "./style.css";
import Anime from "react-anime";

function AnimeHeader(props) {

    let animeProps = {
        loop: false,
        easing: 'linear',
        scale: [14, 1],
        duration: 1200,
        elasticity: 1000,
    }

    return (
        <div>
            <Anime {...animeProps} className='heroHeader'>
                <h1 className="ml15">
                    <span className="word">{props.children}</span>

                </h1>

            </Anime>
        </div>
    );
}

export default AnimeHeader;
