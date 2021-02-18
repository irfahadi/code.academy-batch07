import styled from 'styled-components'

export const Popular = styled.div `
    display: flex;
    flex-direction: column;
`;

export const TopPopular = styled.div `
    display: flex;
    background: #666666;
    border: 1px solid #008080;
    margin: 0 12px 10px 1px;
    width: 750px;
    height: 155px;
    justify-content: flex-start;
`;

export const Image = styled.img `
    height: 100%;
    width: 100%;
    vertical-align: middle;
`;

export const Poster = styled.div `
    width: 50%;
    margin: 0;
`;

export const Description = styled.div `
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background-color: #0e2f44;
    color: #ffffff;
    font-family: "Jaldi", sans-serif;
    padding: 1rem;
    height: auto;
`;

export const Vote = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    justify-content: space-between;
    text-transform: initial;
    > span * {
        margin-left: .5rem;
    }
    > span a {
        cursor: pointer;
    }
`;

export const Chevron = styled.div `
    background: transparent;
    color: #fff68f;
    padding: 1px 2px 0 0;
    width: 50px; 
`;

export const TitleRating = styled.div `
    font-size: .55rem;
    font-weight: 100;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 0 auto;
    > h2{
    margin-top: 0;
    color: #fef65b;
    p {
    font-size: .65rem;
    line-height: 1.9;
    text-transform: initial;
    text-align: justify;
    color: #ffffff;
    }
}
`;
