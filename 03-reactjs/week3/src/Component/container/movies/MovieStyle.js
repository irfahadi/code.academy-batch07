import styled from 'styled-components'

export const Card = styled.div `
background-image: ${props => `url('images/${props.poster}')`};
    justify-content: center;
    background-color: transparent;
    position: relative;
    border-radius: 4px;
    line-height: 1.2;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    padding: 0 1.7rem 30px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 85%;
    height: 200px;
    box-shadow: 0 2px 5px #777 ;
    overflow: hidden;
    margin: 10px 60px;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -webkit-box-shadow: 0 2px 5px #777 ;
    -moz-box-shadow: 0 2px 5px #777 ;
    transition: all 0.2s ease-in-out;
    :hover{
        box-shadow: 0 2px 7px #777 ; 
        -webkit-box-shadow: 0 2px 7px #777 ;
        -webkit-transform: translate(0,-2%);
        -moz-transform: translate(0,-2%);
        transform: translate(0,-2%);
    }
    :active{
        box-shadow: none;
        -webkit-transform-origin: center;
        transform-origin: center;
        -webkit-transform: scale(0.98);
        transform: scale(0.98);
    }
`;

export const Title = styled.div `
    display: inline-flex;
    flex-direction: column;
    position: absolute;
    color: white;
    width: 100%;
    bottom: 0;
    left: 0;
    font-size: 11px;
    font-weight: 300;
    padding: 100px 0;
    background: linear-gradient(to top, #000, transparent);
    text-transform: uppercase;
    text-align: center;
    opacity: 0;
    transition: 0.5s;
    :hover{
        padding-bottom: 50px;
        opacity: 1;
        transition: 0.5s;
    }
`;

export const Play = styled.div `
    width: 32;
    height: 32;
    color: #ffd700;
`;

export const Quality = styled.div `
    background: rgba(11,171,0, 0.58);
    color: white;
    height: 20px;
    font-size: 11px;
    font-weight: 600;
    height: auto;
    line-height: normal;
    padding: 4px 6px;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
`;

export const RatingStar = styled.div `
    position: absolute;
    left: 1px;
    border-radius: 0;
    color: #ebebeb;
    background: rgba(39,59,89,0.7);
    font-size: 11px;
    font-weight: 700;
    height: 20px;
    width: auto;
    line-height: normal;
    padding: 4px 2px 4px 4px;
    text-align: left;
    display: inline-flex;
    opacity: 0.9;
`;

export const Rating = styled.div `
    margin-top: 2px;
`;

export const MoviesList = styled.div `
    display: inline-flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    height: 100%;
`;