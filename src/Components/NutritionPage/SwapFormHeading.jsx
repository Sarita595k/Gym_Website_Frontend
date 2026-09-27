import Heading from "../SubHeader/Heading"
import SwapForm from "./SwapForm"

const SwapFormHeading = () => {
    return (
        <div>
            <Heading heading="Confused About Your Plate?" subHeading="Take the guesswork out of your daily meals."
                paragraph="Wondering if your current diet is truly healthy?
                 Fill out this quick form to get a pentry swap meal and breakdown. find out in seconds with our ai powered personalized form." />
            <SwapForm />
        </div>
    )
}

export default SwapFormHeading