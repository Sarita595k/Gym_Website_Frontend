import Heading from './Heading'
import bgImage from "../../assets/Equipments/bg-image.png"
import ServiceTable from './ServiceTable'
const Services = () => {
    return (
        <div className='bg-no-repeat bg-cover' style={{ backgroundImage: `url(${bgImage})` }}>
            {/* <div> */}
            <div>
                <Heading heading="Push Your Limits. Elevate Your Game."
                    subHeading="What We Offer" paragraph="Explore training 
                options tailored to your lifestyle. We offer modern strength
                 equipment, specialized cardio zones, and expert-led coaching
                 designed to help you unlock peak performance at your own pace." />

            </div>
            <ServiceTable />
        </div >
    )
}

export default Services