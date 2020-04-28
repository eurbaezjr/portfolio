import React from "react";
import "./style.css";
import Anime from "react-anime";

function AnimeSubHeader(props) {

    var easingNames = [
        'easeInQuad',
        'easeInCubic',
        'easeInQuart',
        'easeInQuint',
        'easeInSine',
        'easeInExpo',
        'easeInCirc',
        'easeInBack',
        'easeInBounce',
        'easeInOutQuad',
        'easeInOutCubic',
        'easeInOutQuart',
        'easeInOutQuint',
        'easeInOutSine',
        'easeInOutExpo',
        'easeInOutCirc',
        'easeInOutBack',
        'easeInOutBounce',
        'easeOutQuad',
        'easeOutCubic',
        'easeOutQuart',
        'easeOutQuint',
        'easeOutSine',
        'easeOutExpo',
        'easeOutCirc',
        'easeOutBack',
        'easeOutBounce'
      ]

    let animeProps = {
        easing: 'easeOutBounce',
        scale: [0, 0.75],
        duration: 2500,
        elasticity: 1000,
        delay: (el, i) => 1600 * (i + 1)
    }

    return (
        <div>
            <Anime {...animeProps}>
            <h1 class="ml9">
                <span class="text-wrapper">
                    <span class="letters">
                        {props.children.split("").map(letter => (
                            <span class='letter'>{letter}</span>
                        ))}</span>
                </span>
            </h1>
            </Anime>
        </div>
    );
}

export default AnimeSubHeader;
