
import React from 'react';
import getRecipe from '@api/getRecipe.jsx';
import { useLocation } from 'react-router-dom';
import Recipes from '@features/Recipes/Recipes.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import increasePage from '@features/PageNavigation/increasePage.jsx';
import decreasePage from '@features/PageNavigation/decreasePage.jsx';

 
const RecipesCategories = () => 
{
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const categoryName = searchParams.get('categoryName');
    const recipesData = getRecipe("c", categoryName);
    /* The code `const [page, setpage] = React.useState(0);` is using the `useState` hook from React to
    create a state variable called `page` and a corresponding setter function called `setpage`. The
    initial value of `page` is set to 0. */
    const [page, setpage] = React.useState(0);
    const lengthRecipes = recipesData.length - 1;


    return (
        <section className="mt-40 mobile:mt-20 px-4">
            <h1 className="text-center text-2xl">{categoryName}</h1>
            <div className="mt-12 xl:w-4/5 grid sm:grid-cols-3 xl:grid-cols-5 gap-x-1 gap-y-8 content-center mx-auto pb-8">
                    
                    {
                        /* The code `recipesData[page].map((meals => { ... }))` is iterating over each
                        element in the `recipesData[page]` array and creating a new array of React
                        components. */
                        recipesData[page].map((meals => {
                            return(
                                <Recipes 
                                    key = {meals.idMeal}
                                    idrecipe = {meals.idMeal}
                                    img = {meals.strMealThumb}
                                    title = {meals.strMeal}
                                />
                            )
                        }))
                        
                    } 
                </div>
                
                    {/* The code `{recipesData.length > 1 && ...}` is a conditional rendering statement
                    in JSX. It checks if the length of the `recipesData` array is greater than 1. If
                it is, it renders the following JSX code: */}
                    {recipesData.length > 1 && 
                        <>
                            <div className="text-center py-8">
                                <FontAwesomeIcon icon={faArrowCircleLeft} className="text-green-500 text-5xl px-4" onClick={() => decreasePage(page, setpage)}/>
                                <FontAwesomeIcon icon={faArrowCircleRight} className="text-green-500 text-5xl px-4" onClick={() => increasePage(page, setpage, lengthRecipes)}/>
                                Page - {page}
                            </div>
                        </>
                    }
               
                        
                    

                


        </section>
    )
}
export default RecipesCategories;