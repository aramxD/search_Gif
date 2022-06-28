import React from "react";
import styled from "styled-components";


function ProjectTitle({className}){
     
    return(
        <div className={className}>
    <h1>Le Search GIF </h1>
    </div>
    )
}


export default styled(ProjectTitle)`
    
    h1{
        margin:30px 0;
    }
`