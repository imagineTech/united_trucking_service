import styled from 'styled-components';
import { NavLink } from "react-router-dom";

/******************
====================
    Header (index.js)
====================
******************/

export const Header = styled.header`
`;

export const HeadImageContainer = styled.figure`
    margin: 0 auto;
    text-align: center;
    overflow: hidden;
`;

/******************
====================
    HeaderInfo
====================
******************/

export const HeadInfoContainer = styled.div`
    min-height: 40vh;
`;

/******************
====================
    HeaderNav
====================
******************/

export const HeadNavContainer = styled.nav`
    background-color: #a11e35;
    text-align: center;

    /* 
        Had to remove attrs from NavItem so that 
        we may apply media queries to the acitve style
    */
    .nav-border {
        border: 2px solid #fff;

        @media (min-width: 850px) {
            border: none;
            border-bottom: 2px solid #fff;
        }
    }

    @media (min-width: 850px) {
        padding: 1.2% 0;
    }
`;

export const NavItem = styled(NavLink)`
    color: white;
    text-decoration: none;
    cursor: pointer;
    padding: 4% 0;
    font-size: 1.3rem;
    display: block;

    @media (min-width: 850px) {
        display: inline-block;
        padding: 0 0 0.5% 0;
        margin: 0 3%;
    }
`;

/******************
====================
    HeaderImages
====================
******************/

export const HeadImage = styled.img.attrs(props => ({
    alt: props.location.pathname === "/" ? "/home" : props.location.pathname
}))`
    background-image: url(${props => props.src});
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
`;

export const HeadInfoImage = styled.img.attrs({
    alt: "United Truck Service Logo"
})`
    background-image: url(${props => props.src});
    width: 35%;
`; 