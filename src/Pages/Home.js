import React, {useState} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Navbar isOpen={isOpen} toggle = {toggle}/>
            <Sidebar isOpen={isOpen} toggle = {toggle}/>
        </>
    )
}

export default Home
