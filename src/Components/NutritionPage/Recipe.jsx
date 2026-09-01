import React from 'react'
import Heading from '../SubHeader/Heading'
import RecipeForm from './RecipeForm'

const Recipe = () => {
    return (
        <div>
            <Heading heading="High-Protein Fuel from the Indian Kitchen"
                subHeading="Quick Prep. High Protein. Zero Guesswork"
                paragraph="Eating for muscle growth and fat loss shouldn't
                 require hours of prep or boring, unseasoned meals. Explore
                  our curated vault of quick, high-protein recipes made with
                  everyday Indian staples like paneer, soya chunks, eggs, and
                   sprouts—delivering optimal macros, unbeatable flavor, and
                    under-20-minute cook times." />
            <RecipeForm />
        </div>
    )
}

export default Recipe