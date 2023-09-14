import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import Recipes from '@features/Recipes/Recipes.jsx';
import increasePage from '@features/PageNavigation/increasePage.jsx';
import decreasePage from '@features/PageNavigation/decreasePage.jsx';


/* The code defines a functional component called `RecipesPages`. It takes in four parameters:
`recipesData`, `page`, `setpage`, and `lengthRecipes`. */
const RecipesPages = (recipesData, page, setpage, lengthRecipes) => 
{
    return(
        <>
        <div className="mt-12 xl:w-4/5 grid sm:grid-cols-3 xl:grid-cols-5 gap-x-1 gap-y-8 content-center mx-auto pb-8">            
            {
                /* The code `recipesData.Pages[page].map((meals => { ... }))` is iterating over an
                array of `meals` objects within the `recipesData.Pages` array at the specified
                `page` index. */
                recipesData.Pages[page].map((meals => {
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
        
         {/* The code `{recipesData.Pages.length > 1 && ...}` is a conditional rendering statement in
        JavaScript. It checks if the length of the `recipesData.Pages` array is greater than 1. If
        it is, it renders the following JSX code: */}
            
        {recipesData.Pages.length > 1 && 
            <>
                <div className="text-center py-8">
                    <FontAwesomeIcon icon={faArrowCircleLeft} className="text-green-500 text-5xl px-4" onClick={() => decreasePage(page, setpage)}/>
                    <FontAwesomeIcon icon={faArrowCircleRight} className="text-green-500 text-5xl px-4" onClick={() => increasePage(page, setpage, lengthRecipes)}/>
                        Page {page + 1} - {recipesData.Pages.length}
                </div>
            </>
        }
        </>
    )
}

export default RecipesPages;