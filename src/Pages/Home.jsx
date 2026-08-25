import React from 'react'
import Hero from '../Components/Header/Hero'
import WhyChoose from '../Components/SubHeader/WhyChoose'
import Services from '../Components/SubHeader/Services'
import Testimonials from '../Components/SubHeader/Testimonials'
import Pricing from '../Components/SubHeader/Pricing'

const Home = () => {
    return (
        <div>
            <Hero />
            <WhyChoose />
            <Services />
            <Testimonials />
            <Pricing />
        </div>
    )
}

export default Home