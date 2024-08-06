import React from 'react'
import Hero from '../../components/Hero/Hero'
import NavbarHome from '../../components/Navbar/NavbarHome'

interface Props {}

const Homepage = (props: Props) => {
  return (
    <div>
        <NavbarHome />
        <Hero />
    </div>
  )
}

export default Homepage