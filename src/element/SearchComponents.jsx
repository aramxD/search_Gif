import React from "react";
import styled from "styled-components"

function SearchComponents({className}){
    
    return(
    <div className={className}>
    <input type="text" />
    <button type="button">🔎</button>
    
    </div>
    )
}


export default styled(SearchComponents)`
display:flex;
justify-content: space-around;

input{
    width:90%;
}
button{
    font-size:25px
}

`