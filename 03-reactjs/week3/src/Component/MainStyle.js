import styled from 'styled-components'

export const MainContent = styled.div`
    grid-area: content;
    width: 100%;
    margin: 0;
    background-color: #e6e6fa;
    display: flex;
    padding: 10px;
`;

export const Container = styled.div`
    display: grid;
    grid-template-areas: "header header" "side content" "footer footer";
    height: 100vh;
    grid-template-columns: 2fr 6fr;
    grid-template-rows: auto 1fr auto;
    grid-gap: 1px;
`;

export const NavTop = styled.div`
    background-color: #ffff;
    grid-area: header;
    padding: 0 1rem;
    align-items: center;
    box-shadow: 0 1px 5px 0 rgba(0,0,0,0.2), 0 3px 4px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0, 0.14);
    z-index: 5001;
    position: sticky;
    top:0;
    ul{
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        justify-items: center;
        align-items: center;
    }
    ul li img{
        height: 65px;
        width: 170px;
    }
    li.logo{
        margin-right: 75vh;
    }
`;

export const NavSide = styled.div`
    grid-area: side;
    background-color: #E6E6FA;
    padding: 10px;
    margin-right: 0.5rem;
    position: sticky;
    top: 10px;
    ul{
        display: flex;
        list-style: none;
        padding: 0.5em;
        margin: 0;
        flex-direction: column;
    }
    ul li{
        margin: 1em 1em;
    }
    ul li a{
        text-decoration-line: none;
    }
`;

export const NavSideLink =`
    margin: 0.5em 1em;
    text-decoration-line: none;
`;

export const Footer=` 
    h2{
        font-size: 14px;
        color: #468499
    }
`;


