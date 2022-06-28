import React from "react";
import ProjectTitle from "../element/ProjectTitle";
import SearchComponents from "../element/SearchComponents";


function Header({searchData, setSearchData, setLeSearch}){
    return(
    <>
    <ProjectTitle/>
    <SearchComponents searchData={searchData} setSearchData={setSearchData} setLeSearch={setLeSearch}/>
    </>
    )
}


export default Header