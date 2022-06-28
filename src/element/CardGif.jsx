import React from "react";
import styled from "styled-components";

function CardGif({className, src, title, }){


    return (
        <article className={className} onClick={ ()=>{navigator.clipboard.writeText(src)} } >
        
        <img src={src} alt={title} />
        
        </article>
    )
}


export default styled(CardGif)`
 img{
    width:100%;
  }

  img:hover{
     
    border-radius:20px;
    box-shadow:1px 8px 5px black;
    transform:scale(1.3);
  }
` 