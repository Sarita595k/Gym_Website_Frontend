import Hero from '../Components/Header/Hero'
import WhyChoose from '../Components/SubHeader/WhyChoose'
import Services from '../Components/SubHeader/Services'
import Testimonials from '../Components/SubHeader/Testimonials'
import Pricing from '../Components/SubHeader/Pricing'
import Trainer from '../Components/SubHeader/Trainer'
import Faqs from '../Components/SubHeader/Faqs'
import Footer from '../Components/Footer/Footer'
import News from '../Components/SubHeader/News'

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
            <News />
            <Footer />
        </div>
    )
}

export default Home