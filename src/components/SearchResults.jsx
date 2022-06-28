import React from "react";
import   CardGif  from '../element/CardGif'
 
import styled from 'styled-components'
 

function SearchResults({className, data, title}){

    return (
        <div className={className}>
           <h2>{title}</h2>

            <div className="resultContainer">
           {data.map(dato=>( 
            <>
            <CardGif 
              key={dato.id}
              src={dato.images.fixed_height.url}
              title={dato.title}
              /> 
              {/* <p>{dato.id}</p> */}
              </>
            ))
           } 
          </div>
    
        </div>
      )
       
       
}


export default styled(SearchResults)`
h2{
  margin:30px 0;
}
  
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
  @media (max-width:600px){
    .resultContainer{
      column-count:2;
    }
  }
  /* @media (max-width:400px){
    .resultContainer{
      column-count:1;
    }
  } */

`