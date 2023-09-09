
import getRecipe from '@api/getRecipe.jsx';
import { useLocation } from 'react-router-dom';
import Recipes from '@features/Recipes/Recipes.jsx';
 
const RecipesCategories = () => 
{
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const categoryName = searchParams.get('categoryName');
    const recipesData = getRecipe("c", categoryName);

    
    return (
        <section className="mt-40 mobile:mt-20 px-4">
            <h1 className="text-center text-2xl">{categoryName}</h1>
            <div className="mt-12 xl:w-4/5 grid sm:grid-cols-3 xl:grid-cols-5 gap-x-1 gap-y-8 content-center mx-auto pb-8">
                    {
                    recipesData.map((meals => 
                        {
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
        </section>
    )
}
export default RecipesCategories;