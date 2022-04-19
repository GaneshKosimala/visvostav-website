import React from 'react'
import  Header  from './header'
import Footer from './footer'
import Basepart from './basepart'
import Branches from './branches';
import Listofevents from './listofevents';
import Events from './events';
import Stalls from './stalls';

export const Home = () => {
  return (
    <div>
        <Header />
        <Branches />
        <Listofevents />
        <Events />
        <Stalls />
        <Footer />
        <Basepart/>
    </div>
  )
}

export default Home