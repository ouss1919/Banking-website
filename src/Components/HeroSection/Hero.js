import React, { useState } from 'react'
import { HeroBg, ArrowForward, ArrowRight, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg, Button } from './HeroElements'
import Video from '../../Videos/video.mp4'
const Hero = () => {
    const [hover, setHover] = useState(false)
    const onHover = () =>{
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg  autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign up for a new account today and receive $250 in 
                    credit towards your next payement.
                </HeroP>
                 <HeroBtnWrapper>
                     <Button  onMouseEnter={onHover} onMouseLeave={onHover} to="signup">
                         Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                     </Button>
                 </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
