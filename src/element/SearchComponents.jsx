import React, { useState } from "react";
import styled from "styled-components";

function SearchComponents({
  className,
  searchData,
  setSearchData,
  setLeSearch,
}) {
  const [searchValue, setSearchValue] = useState("");

  const searchGIF = (event) => {
    if (event.key === "Enter") {
      setLeSearch(true);
      setSearchData(searchValue);
      setSearchValue("");
      //console.log()
    }
  };
  //console.log(searchValue)
  const onSubmit=(event)=>{ 
    event.preventDefault();
    
    setLeSearch(true);
      setSearchData(searchValue);
      setSearchValue("");
  }
  return (
    <div className={className}>
       <form onSubmit={onSubmit}>
        <input
          type="text"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          onKeyPress={searchGIF}
          placeholder="Looking for a GiF..?"
        />
        <button type="submit">
          🔎
        </button>
       </form>
    </div>
  );
}

export default styled(SearchComponents)`
  form{
    display: flex;
  justify-content: space-evenly;

  input {
    width: 90%;
  }
  button {
    font-size: 25px;
  }
  }
  
`;
