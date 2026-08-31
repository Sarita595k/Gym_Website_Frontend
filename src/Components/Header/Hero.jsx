import { useEffect, useState } from "react"
import slide1 from "../../assets/Hero/slide1.png"
import slide5 from "../../assets/Hero/slide2.png"
import slide3 from "../../assets/Hero/slide3.png"
import slide4 from "../../assets/Hero/slide4.png"
import slide2 from "../../assets/Hero/slide5.png"
import HeaderHeading from "./HeaderHeading"

const slides = [slide1, slide2, slide3, slide4, slide5]

const Hero = ({ heading, subheading }) => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const sliderTimer = setInterval(() => {
            setIndex(prevIndex => {
                const nextIndex = prevIndex + 1
                if (nextIndex == slides.length) {
                    return 0
                }
                return nextIndex
            })
        }, 5000);
        return (() => clearInterval(sliderTimer))
    }, [])
    return (
        <div className="relative">
            <div className="relative w-full h-full">
                <img src={slides[index]} alt="slides" className="w-full h-full object-cover opacity-75" />
            </div>
            <div className="absolute inset-0 bg-emerald-900/50"></div>
            <HeaderHeading heading="The Fastest Path to a Stronger You." subheading="Stop Waiting. Start Winning." />
        </div>
    )
}

export default Hero