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
    opacity:.7;
  }
`