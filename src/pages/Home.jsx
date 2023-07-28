import React, { useContext } from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import FeaturedProduct from '../components/FeaturedProduct'

const Home = () => {
  return (
    <main >
     <Hero text={"Kartify"}/>
     <FeaturedProduct/>
     <Services/>
    </main>
  )
}

export default Home