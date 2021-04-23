import React from 'react'
import{SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarMenu, SidebarrLink, SidebarBtnWrap, SidebarRoute} from './SidebarElements'
const Sidebar = ({toggle, isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarrLink onClick={toggle} to ="about">About</SidebarrLink>
                    <SidebarrLink onClick={toggle} to="discover">Discover</SidebarrLink>
                    <SidebarrLink onClick={toggle} to="services">Services</SidebarrLink>
                    <SidebarrLink onClick={toggle} to="signup">Sign Up</SidebarrLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute onClick={toggle} to="./signin">
                        Sign In
                    </SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>

        </SidebarContainer>
    )
}

export default Sidebar
