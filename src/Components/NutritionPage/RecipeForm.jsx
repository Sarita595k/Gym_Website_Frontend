import { useState } from "react"
import Recipe from "./Recipe"
import { styled } from "styled-components"
import Loading from "../../assets/Nutrition/Loading.mp4"
import Load from "../../assets/Nutrition/Load.gif"
const Label = styled.label`
color:#006045;
font-weight:500;
display:block;
`
const RecipeForm = () => {
    const [details, setDetails] = useState({
        goal: "fat_loss",
        dietType: "vegetarian",
        targetCalories: "",
        mealType: "breakfast"
    })
    const [errorMessage, setErrorMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [recipe, setRecipe] = useState([])

    const handleChange = (event) => {
        const { name, value } = event.target
        setDetails(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setErrorMessage("")
        setLoading(true)
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/recipe/recipeDetails`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                }, credentials: "include",
                body: JSON.stringify(details)
            })

            const data = await response.json()
            if (!response.ok) {
                throw new Error("Error in generating recipe" || data.message)
            }
            setLoading(false)
            setRecipe(data.data)
            console.log(data)
        } catch (err) {
            console.log(err.message)
            setErrorMessage(err.message)
            setLoading(false)
        }
    }
    return (
        <>
            <div className="pt-10 capitalize md:w-[50%] m-auto text-center flex flex-col items-center shadow-2xl shadow-emerald-800 my-5
            hover:scale-105 transition-transform duration-300 ease-in">
                <h1 className="text-[#006045] capitalize text-center font-semibold">
                    avsar gym - nutrition AI</h1>
                <h1 className="text-2xl text-[#006045] font-semibold font-subHeading pt-4">
                    generate your custom AI-meal plan</h1>
                <p className="text-sm">customize your fitness goal,
                    dietery preferences and daily target calories</p>
                {/* <h1 className='font-para pt-10 pb-5 text-center capitalize text-lg text-shadow-lg text-gray-700'>fill the form to get your recipe ready</h1> */}
                {errorMessage && (
                    <p className="text-red-600 bg-red-100 border border-red-400 px-4 py-2 rounded mb-4 text-center font-medium capitalize">
                        {errorMessage}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="pt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                        {/* <div className="flex flex-row"> */}
                        <div className="flex flex-col">
                            <Label htmlFor='goalIs'>fitness goal</Label>
                            <select name="goal" id="goalIs" className='border rounded-sm px-2 py-1' value={details.goal} onChange={handleChange}>
                                <option value="fat_loss" className="capitalize">Fat loss</option>
                                <option value="muscle_gain" className="capitalize">muscle gain</option>
                                <option value="maintenance" className="capitalize">maintenance</option>
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <Label htmlFor='dietIs' className="">diet type</Label>
                            <select name="dietType" id="dietIs" className='border rounded-sm px-2 py-1' value={details.dietType} onChange={handleChange}>
                                <option value="vegetarian" className="capitalize">vegetarian</option>
                                <option value="non_vegetarian" className="capitalize">non-vegetarian</option>
                                <option value="vegan" className="capitalize">vegan</option>
                                <option value="eggetarian" className="capitalize">eggetarian</option>
                            </select>
                        </div>
                        {/* </div> */}

                        {/* <div className="flex flex-row"> */}
                        <div className="flex flex-col">
                            <Label htmlFor="targetCalorie">Target Calories(kcal)</Label>
                            <input type="text" name="targetCalories" id="targetCalorie"
                                value={details.targetCalories} onChange={handleChange}
                                className="border rounded-sm px-2 py-1" />
                        </div>
                        <div className="flex flex-col">
                            <Label htmlFor='mealTypeIs'>meal category</Label>
                            <select name="mealType" id="mealTypeIs" className='border rounded-sm px-2 py-1'
                                value={details.mealType} onChange={handleChange}>
                                <option value="breakfast" className="capitalize">breakfast</option>
                                <option value="lunch" className="capitalize">lunch</option>
                                <option value="dinner" className="capitalize">dinner</option>
                                <option value="mid_morning" className="capitalize">mid morning</option>
                                <option value="evening_snacks" className="capitalize">evening snacks</option>
                            </select>
                        </div>
                        {/* </div> */}
                    </div>
                    <button type="submit" className="cursor-pointer bg-emerald-700 font-para px-5 py-2
                     text-white font-semibold capitalize my-10 hover:scale-105 transition-transform duration-300 ease-in-out">generate meal plan</button>
                </form>
            </div>
            {loading &&
                // <video autoPlay loop playsInline className="w-[20%] h-[20%]">
                //     <source src={Loading} type="video/mp4" /></video>
                <img src={Load} alt="loading gif" className="m-auto w-[20%] h-[20%] py-10" />
            }
            <Recipe recipe={recipe} />
        </>
    )
}

export default RecipeForm