import React from 'react'
import Hero from '../Components/Header/Hero'
import WhyChoose from '../Components/SubHeader/WhyChoose'
import Services from '../Components/SubHeader/Services'
import Testimonials from '../Components/SubHeader/Testimonials'
import Pricing from '../Components/SubHeader/Pricing'
import Trainer from '../Components/SubHeader/Trainer'
import Faqs from '../Components/SubHeader/Faqs'

const Home = () => {
    return (
        <div>
            <Hero />
            <WhyChoose />
            <Services />
            <Testimonials />
            <Pricing />
            <Trainer />
            <Faqs />
        </div>
    )
}

export default Home