import React from "react";
import "./style.css";
import Anime from "react-anime";

function AnimeSubHeader(props) {

    let animeProps = {
        easing: 'easeOutBounce',
        scale: [0, 0.75],
        duration: 2500,
        elasticity: 1000,
        delay: (el, i) => 1600 * (i + 1)
    }

    return (
        <div>
            <Anime {...animeProps} className='heroSubHeader'>
            <h2 class="ml9">
                <span class="text-wrapper">
                    <span class="letters">
                        {props.children.split("").map(letter => (
                            <span className='letter'>{letter}</span>
                        ))}</span>
                </span>
            </h2>
            </Anime>
        </div>
    );
}

export default AnimeSubHeader;
