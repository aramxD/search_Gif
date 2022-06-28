import React from "react";
import   CardGif  from '../element/CardGif'
import data from '../data'
import styled from 'styled-components'


console.log(data)

function SearchResults({className}){

    return (
        <div className={className}>
           <h1>soy un buscador de GIF</h1>

            <div className="resultContainer">
           {data[0].data.map(dato=>( 
            <CardGif 
               
              key={dato.id}
              src={dato.images.fixed_height.url}
              title={dato.title}
              /> 
            ))
           } 
          </div>
    
        </div>
      )
       
       
}


export default styled(SearchResults)`
  
  .resultContainer{
    column-count:4;
    column-gap:.5em;
  }
  .gifCard{
    display:inline-block;
    margin:0 0 .5em;
     
  }
  

  @media (max-width:900px){
    .resultContainer{
      column-count:3;
    }
  }

`