import HeaderHeading from "../Header/HeaderHeading"
import VideoComp from "../Header/VideoComp"
import nutrition from "../../assets/Nutrition/nutrition.mp4"
const NutritionHero = () => {
    return (
        <div className="relative">
            <VideoComp videoIs={nutrition} />
            <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
                <HeaderHeading heading="Eat Clean. Train Heavy. Live Better" subheading="AI-Powered Meal Plans Backed by Certified Coaches" />
            </div>
        </div>
    )
}

export default NutritionHero