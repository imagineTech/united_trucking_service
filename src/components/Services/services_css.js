import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ServicesContentWrapper = styled.section`
    float: left;
    width: 40%;
    line-height: 1.4;
    margin: 0 3% 0 0;
`;

export const ServicesImageContainer = styled.figure`
    position: relative;
    padding-top: 56.25%;
    overflow: hidden;
`;

export const ServicesImg = styled.img.attrs(props => ({
    alt: props.location.pathname,
}))`
    background-image: url(${props => props.src});
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
`

export const TypesNavigation = styled.nav`
`;

export const TypesLink = styled(NavLink).attrs({
    activeStyle: {
        fontStyle: "italic",
        paddingBottom: "1%",
        borderBottom: "2px solid #000"
    }
})`
    display: block;
    width: 35%;
    margin: 1.3% 0;
    text-decoration: none;
    color: #000;

    :hover {
        cusor: pointer;
    }
`;