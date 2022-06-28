import React from "react";


function CardGif({src, title, width, height}){


    return (
        <article>
        <h2>Soy la tarjeta del gif :D</h2>
        <img src={src} alt={title} />
        <p>w={width} h={height}</p>
        </article>
    )
}


export {CardGif}