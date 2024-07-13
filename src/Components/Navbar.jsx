import React from 'react'
import styled from 'styled-components'
import HamMenu from './HamMenu';
import { mobile } from '../ResponsiveSetup';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import Don from '../assets/Don.png'

const MenuBar = styled.div`
/* border: 1px solid black ; */
height:10rem;
width:100%;
display:grid;
grid-template-columns: repeat(2,minmax(50px,1fr));
align-items: center;
justify-items: center;
font-family: "Josefin Sans", sans-serif;


/* @media screen and (max-width: 150px){
   grid-template-columns: auto;
} */
`;
const Logo = styled.img`   
    min-height: 10rem;
    width:10rem;

`
const Navmenu = styled.div`
display:grid;
grid-template-columns: 5rem 5rem;
align-content: center;
justify-content: center;
.Home{
    text-decoration: none;
};
.About{
    text-decoration: none;
    
};
${mobile({
    display: 'none'
})}
`;

const HamBar = styled.div`
    display: none;
    ${mobile({
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center',
    zIndex: '3',
})}`;

const Navbar = () => {


    return <MenuBar>
        <Link to='/'><Logo src={logo} alt='logo'></Logo></Link>

        <Navmenu>
            {window.location.pathname === '/about' ? <Link className='Home' to='/'>Home</Link> : <Link className='About' to='/about'>About</Link>}
        </Navmenu>
        <HamBar><HamMenu /></HamBar>
    </MenuBar>

}

export default Navbar
