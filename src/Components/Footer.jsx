import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { mobile } from '../ResponsiveSetup';

const Container = styled.div`
    display:grid;
    background-color: #434d56;
    min-width: max-content;
    grid-template-columns: 20rem 30rem;
    /* color:white; */
    min-height:10rem;
    margin: 1rem 8.5rem 0rem 8.5rem;
    padding:2rem 0rem 0rem 4rem;
    
   @media screen and (max-width:930px){
    grid-template-columns: 6rem 5rem;
    padding:1rem 0rem 0rem 1rem;
    margin:0rem;
};
@media screen and (max-width:375px){
    grid-template-columns: repeat(1,minmax(10px,1fr));
}
`;

const Logo = styled.div`
    display: grid;
`;
const ContactMe = styled.div`
display: grid;
grid-template-rows: 4rem 3rem 2rem ;


.link{
   color: black;
   text-decoration: none;
   word-wrap: break-word;
}
`;
const Footer = () => {
    return <Container>
        <Logo>
            <h3>Logo</h3>
        </Logo>
        <ContactMe>
            <h4>Contact Me</h4>
            <Link className='link' to='mailto:DFJ.counselling@gmail.com'>email:DFJ.counselling@gmail.com</Link>
            <Link className='link' to='tel:1234567890'>1234567890</Link>
        </ContactMe>
    </Container>
}

export default Footer
