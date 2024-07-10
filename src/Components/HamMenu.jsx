import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import pic from '../assets/Don.png'
import { Link } from 'react-router-dom';

const Container = styled.div`
`;
const Button = styled.button`
display: ${props => props.open ? 'none' : 'visible'};
border: none;
background-color: white;
    
`;
const Menu = styled.div`
   display: grid;
    background-color: black;
    min-height:100vh;
    /* min-width:100%; */
    color:white;
    animation-name: HamBar;
    animation-duration: 3s;
    ul{
        display:grid;
        grid-template-rows: 3rem 3rem;
        align-items: center;
        justify-content: center;
        padding:2rem;

    } 

    li{
    list-style: none;
       
    };
    img{
        height:50px;
        border-radius: 5rem;
    };
    .Home{
        text-decoration: none;
        color: white;
    };
    .About{
        text-decoration: none;
        color:white;
    }
    @keyframes HamBar {
    0%{
       transform: translateX(0%);
    }
    100%{
        transform: translateX(-3%);
      
    }
    }
`;
const Close = styled.button`
   background-color: black;
   color:white;
`
const HamMenu = () => {
    const [open, setOpen] = useState(false)


    return <Container>
        <Button onClick={() => setOpen(!open)} open={open}><MenuIcon /></Button>
        {console.log(open)}
        {open && (
            <Menu>
                <Close onClick={() => setOpen(!open)}> <CloseIcon /></Close>
                <ul>
                    <li><Link className='Home' to='/'>Home</Link></li>
                    <li><Link className='About' to='/about'><img src={pic} /> About</Link></li>
                </ul>

            </Menu>
        )}
    </Container>
}

export default HamMenu
