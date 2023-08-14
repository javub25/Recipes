
import GetRecipeInfo from "../functions/GetRecipeInfo";
import React from "react";
import { useLocation } from 'react-router-dom';

/*It will return details about each selected recipe*/
const RecipeDetails = () => 
{
    const location = useLocation();
    //We're gonna use URLSeachParams object to get our RecipeID from URL
    const searchParams = new URLSearchParams(location.search);
    //Le's get RecipeID from URL from Recipes component
    const RecipeID = searchParams.get('recipeId');
    
    //We get data about meals as tags, recipe tutorials from Youtube and a step-by-step report 
    const RecipeDetails = GetRecipeInfo(RecipeID);
    return (
        <div className="flex w-full items-center mx-auto animate__animated animate__zoomIn">
            <div className="w-1/4">
                <div className="px-4 pt-8">
                    <img src={RecipeDetails.Img} className="w-full rounded-lg"/>                
                </div>
            </div>

            <div className="w-3/4">
                <div className="px-4 py-6 bottom-0 mx-auto w-full">
                    <h2 className="text-center text-black font-bold text-slate-600">{RecipeDetails.Title}</h2>
                </div>
            
                {/*Comment JSX: This only appear when there are tags*/}
                {RecipeDetails.Tags !==null &&
            
                <div className="px-4 py-6 bottom-0 mx-auto w-full">
                    <h2 className="text-center text-black font-bold text-slate-600 break-words">{RecipeDetails.Tags}</h2>
                </div>
                }
                <div className="px-4 py-6 bottom-0 mx-auto w-full">
                    <h2 className="text-black font-bold text-slate-600">{RecipeDetails.StepByStep}</h2>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetails;
