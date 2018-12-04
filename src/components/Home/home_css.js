import styled from 'styled-components';

export const HomeImageContainer = styled.figure`
    position: relative;
    padding-top: 56.25%;
    overflow: hidden;
`;

export const HomeImg = styled.img.attrs(props => ({
    alt: props.location.pathname,
}))`
    background-image: url(${props => props.src});
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
`

export const HomeCont = styled.div`
    width: 40%;
    float: left;
    margin: 0 3% 0 0;
    line-height: 1.6;
`;