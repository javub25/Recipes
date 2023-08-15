
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
        <div className="bg-white flex w-full items-center mx-auto animate__animated animate__zoomIn">
            {/*Div Img: Width:33%*/}

             <div className="w-1/3 relative">
                <div className="p-6">
                    <img src={RecipeDetails.Img} className="w-full rounded-lg"/>                
                </div>
                <div className="absolute bottom-0 mx-auto w-full p-6">
                    <div className="py-2 bg-black rounded-b-lg">
                        <h2 className="text-center text-white font-bold">{RecipeDetails.Title}</h2>
                    </div>
                </div>
            </div>
            {/*Div Info: Width:66%*/}
            <div className="w-2/3 px-6">
                {/*Comment JSX: This only appear when there are tags*/}
                {RecipeDetails.Tags !==null &&
                <div className="w-48 p-2 bg-orange-400 my-5">
                    <h2 className="text-center text-white font-bold text-slate-600 break-words text-sm">{RecipeDetails.Tags}</h2>
                </div>
                }
                {/*Comment JSX: If doesn't exist any Tag, we'll add <br/>*/}
                {RecipeDetails.Tags === null && <><br/></>}

                <div className="px-4 py-6 bottom-0 mx-auto w-full">
                    <h2 className="text-black font-bold text-slate-600">{RecipeDetails.StepByStep}</h2>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetails;