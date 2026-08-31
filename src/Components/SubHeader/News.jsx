import Heading from "./Heading"
import NewsApi from "./NewsApi"
const News = () => {
    return (<>

        <div>
            <Heading heading="Stay Informed. Live Healthier." subHeading="Fuel Your Body, Elevate Your Results with Nutrition & Wellness Science."
                paragraph="Real fitness transformations are built in the kitchen as much as
                 on the gym floor. Stay ahead with the latest 
                 science-backed insights on high-protein diets,
                  recovery superfoods, metabolism, and everyday 
                  healthy eating habits tailored for active 
                  Indian lifestyles."/>
        </div>
        <NewsApi />
    </>
    )
}

export default News