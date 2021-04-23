import styled from "styled-components";
import { MdArrowForward, MdChevronRight } from "react-icons/md";
import { Link as LinkScroll } from 'react-scroll'

export const HeroContainer = styled.div`
    display: flex;
    background : #0c0c0c;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index :1;
`
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`
export const HeroContent = styled.div`
    display: flex;
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const HeroH1 = styled.h1`
    color: #fff;
    margin-bottom: 10px;
    font-size: 40px;
    word-wrap: break-word;
    @media screen and (max-width: 768px){
        font-size: 30px;
    }
    @media screen and (max-width: 480px){
        font-size: 24px;
    }`
export const HeroP = styled.p`
    color: #fff;
    margin-top: 24px;
    font-size: 24px;
    text-align: center;
    max-width : 600px;
    @media screen and (max-width: 768px){
        font-size: 24px;
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`
export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`   
export const Button = styled(LinkScroll)`
    border-radius: 80px;
    background: ${({primary}) => (primary ? '#01BF71' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')} ;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    cursor: pointer;
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
    }
`

export const ArrowForward = styled(MdArrowForward)`
`

export const ArrowRight = styled(MdChevronRight)`
`