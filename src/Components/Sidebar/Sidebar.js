import React from 'react'
import{SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarMenu, SidebarrLink, SidebarBtnWrap, SidebarRoute} from './SidebarElements'
const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarrLink to ="about">About</SidebarrLink>
                    <SidebarrLink to="discover">Discover</SidebarrLink>
                    <SidebarrLink to="services">Services</SidebarrLink>
                    <SidebarrLink to="signup">Sign Up</SidebarrLink>
                </SidebarMenu>
                <SidebarBtnWrap>
                    <SidebarRoute to="./signin">
                        Sign In
                    </SidebarRoute>
                </SidebarBtnWrap>
            </SidebarWrapper>

        </SidebarContainer>
    )
}

export default Sidebar
