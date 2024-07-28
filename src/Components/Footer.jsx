import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import logo2 from '../assets/logo2.png'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/PhoneEnabled';

const Container = styled.div`
    display:grid;
    background-color: #434d56;
    min-width: max-content;
    grid-template-columns: 20rem 30rem;
    color:white;
    min-height:10rem;
    margin: 1rem 8.5rem 0rem 8.5rem;
    padding:2rem 0rem 0rem 4rem;
    
   @media screen and (max-width:1024px){
    grid-template-columns: 6rem 15rem;
    padding:1rem 0rem 0rem 1rem;
    margin:0rem;
};
@media screen and (max-width:375px){
    grid-template-columns: repeat(1,minmax(10px,1fr));
}
`;

const Logo = styled.img`
    display: grid;
   height: 5rem;
    width: 5rem;
`;
const ContactMe = styled.div`
display: grid;
grid-template-rows: 4rem 3rem 2rem ;


.link{
   color: white;
   text-decoration: none;
   word-wrap: break-word;
}
`;
const Footer = () => {
    return <Container>
        <Logo
            src={logo2}
            alt='logo'>
        </Logo>
        <ContactMe>
            <h4>Contact Me</h4>
            <Link className='link' to='mailto:DFJ.counselling@gmail.com'><EmailIcon style={{ margin: '-0.3rem' }} />   DFJ.counselling@gmail.com</Link>
            <Link className='link' to='tel:07908 456814'> <PhoneIcon style={{ margin: '-0.3rem' }} />  07908 456814</Link>
        </ContactMe>
    </Container>
}

export default Footer
