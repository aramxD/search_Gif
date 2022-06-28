import React from "react";
import styled from "styled-components";
import logo from '../img/logo_450x200_azul_trans.png'

function Footer({className}){


    return(
        <footer className={className}>
            <a href="juliosantacruz.dev">
            <img src={logo} alt="soy el logo" />
            </a>

        </footer>
    )
}

export default styled(Footer)`
margin: 30px 0 0 0;
    height:80px;

    img{
        height:80px
    }
`