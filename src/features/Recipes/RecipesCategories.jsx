
import React from 'react';
import getRecipe from '@api/getRecipe.jsx';
import { useLocation } from 'react-router-dom';
import RecipePages from "@features/Recipes/RecipesPages.jsx";

 
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
    const lengthRecipes = recipesData.Pages.length - 1;


    return (
        <section className="mt-40 mobile:mt-20 px-4">
            <h1 className="text-center text-2xl">{categoryName}</h1>
            {
                RecipePages(recipesData, page, setpage, lengthRecipes)
            }
        </section>
    )
}
export default RecipesCategories;