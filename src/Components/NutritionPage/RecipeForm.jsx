import { useState } from "react"

const RecipeForm = () => {
    const [details, setDetails] = useState({
        goal: "fat_loss",
        dietType: "vegetarian",
        targetCalories: "",
        mealType: "breakfast"
    })
    const [errorMessage, setErrorMessage] = useState("")
    const [recipe, setRecipe] = useState([])

    const handleChange = (event) => {
        const { name, value } = event.target
        setDetails(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setErrorMessage("")
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
            setRecipe(data.data)
            console.log(data)
        } catch (err) {
            console.log(err.message)
            setErrorMessage("failed to generate recipes")
        }
    }
    return (<>
        <div>
            <p>{errorMessage}</p>
            <h1 className='font-para pt-10 pb-5 text-center capitalize text-lg text-shadow-lg text-gray-700'>fill the form to get your recipe ready</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='goalIs'>select your goal</label>
                <select name="goal" id="goalIs" className='border' value={details.goal} onChange={handleChange}>
                    <option value="fat_loss">Fat loss</option>
                    <option value="muscle_gain">muscle gain</option>
                    <option value="maintenance">maintenance</option>
                </select><br />
                <label htmlFor='dietIs'>select your diet type</label>
                <select name="dietType" id="dietIs" className='border' value={details.dietType} onChange={handleChange}>
                    <option value="vegetarian">vegetarian</option>
                    <option value="non_vegetarian">non-vegetarian</option>
                    <option value="vegan">vegan</option>
                    <option value="eggetarian">eggetarian</option>
                </select>
                <label htmlFor="targetCalorie">Target Calories</label>
                <input type="text" name="targetCalories" id="targetCalorie" value={details.targetCalories} onChange={handleChange} />

                <label htmlFor='mealTypeIs'>select your meal type</label>
                <select name="mealType" id="mealTypeIs" className='border' value={details.mealType} onChange={handleChange}>
                    <option value="breakfast">breakfast</option>
                    <option value="lunch">lunch</option>
                    <option value="dinner">dinner</option>
                    <option value="mid_morning">mid morning</option>
                    <option value="evening_snacks">evening snacks</option>
                </select>

                <button type="submit">Submit</button>
            </form>
        </div>

        {recipe.map((recipeIs, index) =>
            <div key={index}>
                <p>{recipeIs.mealName}</p>
                <p>people: {recipeIs.people}</p>
                <p>prepration Time: {recipeIs.prepTime}</p>
                <p>calories: {recipeIs.macros.calories}</p>
                <p>carbs: {recipeIs.macros.carbs}</p>
                <p>fats: {recipeIs.macros.fats}</p>
                <p>protein: {recipeIs.macros.protein}</p>
                <p>ingredients: {recipeIs.ingredients.map(item =>
                    <ul><li>item name: {item.item} {item.quantity}</li></ul>
                )}</p>
                <p>instructions: {recipeIs.instructions.map(item =>
                    <ul><li>{item}</li></ul>
                )}</p>
            </div>
        )}
    </>
    )
}

export default RecipeForm