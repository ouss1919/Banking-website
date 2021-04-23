import React, {useState} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Hero from '../Components/HeroSection/Hero';
import { homeObjOne, homeObjThree, homeObjTwo } from '../Components/InfoSection/Data';
import Info from '../Components/InfoSection/Info';
import Services from '../Components/Services/Services';
import Footer from '../Components/Footer/Footer';
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Navbar isOpen={isOpen} toggle = {toggle}/>
            <Sidebar isOpen={isOpen} toggle = {toggle}/>
            <Hero />
            <Info {...homeObjOne}/>
            <Info {...homeObjTwo}/>
            <Services />
            <Info {...homeObjThree}/>
            <Footer />
        </>
    )
}

export default Home
