import React, { useEffect, useState } from 'react'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import {Nav, NavabrContainer, NavLogo,MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
const Navbar = ({toggle, isOpen}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=>{
        if (window.scrollY >= 80) {
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, [])

    const scrollTop = () =>{
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavabrContainer>
                    <NavLogo onClick={scrollTop} to="/">
                        dolla
                    </NavLogo>
                    <MobileIcon>
                        <FaBars  onClick={toggle}/>    
                    </MobileIcon> 
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" 
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true'
                            offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                     <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavabrContainer>
            </Nav>
        </>
    )
}

export default Navbar
