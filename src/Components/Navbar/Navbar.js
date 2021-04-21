import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavabrContainer, NavLogo,MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavabrContainer>
                    <NavLogo to="/">
                        dolla
                    </NavLogo>
                    <MobileIcon>
                        <FaBars />    
                    </MobileIcon> 
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover">Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtnLink to="./signin">Sign In</NavBtnLink>
                </NavabrContainer>
            </Nav>
        </>
    )
}

export default Navbar
