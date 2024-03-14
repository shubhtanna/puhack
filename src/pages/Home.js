import React from 'react'
import Footer from '../components/Footer'
import ContactUs from '../components/Home/ContactUs'
import SellEwaste from '../components/Home/SellEwaste'
import Steps from '../components/Home/Steps'


const Home = () => {
  return (
    <div>
    <div><Steps/></div>
    <div><SellEwaste/></div>
    <div><ContactUs/></div>
      <div><Footer/></div>
    </div>
  )
}

export default Home
