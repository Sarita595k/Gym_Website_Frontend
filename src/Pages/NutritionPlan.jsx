import AiNutrition from "../Components/NutritionPage/AiNutrition"
import NutritionHero from "../Components/NutritionPage/NutritionHero"
import { PantrySwap } from "../Components/NutritionPage/PantrySwap"
import RecipeHeading from "../Components/NutritionPage/RecipeHeading"
import SwapFormHeading from "../Components/NutritionPage/SwapFormHeading"
// import Recipe from "../Components/NutritionPage/RecipeHeading"
import WhatToEat from "../Components/NutritionPage/WhatToEat"

const NutritionPlan = () => {
    return (
        <div>
            <NutritionHero />
            <AiNutrition />
            <WhatToEat />
            <PantrySwap />
            {/* <RecipeHeading /> */}
            <SwapFormHeading />
        </div>
    )
}

export default NutritionPlan