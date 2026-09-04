import React from 'react'

const RecipeForm = () => {
    return (
        <div>
            <h1 className='font-para pt-10 pb-5 text-center capitalize text-lg text-shadow-lg text-gray-700'>fill the form to get your recipe ready</h1>
            <form>
                <label htmlFor='goalIs'>select your goal</label>
                <select name="goal" id="goalIs" className='border'>
                    <option value="fat_loss">Fat loss</option>
                    <option value="muscle_gain">muscle gain</option>
                    <option value="maintenance">maintenance</option>
                </select><br />
                <label htmlFor='dietIs'>select your diet type</label>
                <select name="dietType" id="dietIs" className='border'>
                    <option value="vegetarian">vegetarian</option>
                    <option value="non_vegetarian">non-vegetarian</option>
                    <option value="vegan">vegan</option>
                    <option value="eggetarian">eggetarian</option>
                </select>
                <label htmlFor="targetCalorie">Target Calories</label>
                <input type="number" name="targetCalorie" id="targetCalorie" />
            </form>
        </div>
    )
}

export default RecipeForm