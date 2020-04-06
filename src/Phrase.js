import React from 'react';
import styled from '@emotion/styled';
const Container = styled.div`
    padding: 2rem;
    border-radius: .5rem;
    background-color: #FFF;
    max-width: 800px;
    @media (min-width: 992px) {
        margin-top: 10rem;
    }
    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
           content: open-quote;
           font-size: 10rem;
           color: black;
           position: absolute;
           left: -1rem;
           top: -2rem; 
        }   
    }
    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        text-align: right;
        font-weight: bold;
        color: #666;
        margin-top: 2rem;
    }
`
const Phrase = ({phrase}) => {
    if(Object.keys(phrase).length === 0) return null
    return ( 
        <Container>
            <h1>{phrase.quote}</h1>
            <p>{phrase.author}</p>
        </Container>
     );
}
 
export default Phrase;