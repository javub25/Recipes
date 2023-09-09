
import React from "react";
import getUseffect from '@api/getUseffect.jsx';

/*We're gonna get img, title, tags and instructions besides to idRecipe regarding Recipe chosen by user*/
const getRecipeInfo = (idRecipe) => 
{
    //Object will store that data for each recipe
    const [RecipeInfo, setRecipeInfo] = React.useState({
            Category: "",
            Area: "",
            Ingredients: new Array(),
            Img: "",
            Title: "",   
            Tags: "",
            StepByStep:"",
    });

    getUseffect(`/lookup.php?i=${idRecipe}`, setRecipeInfo, "meals", idRecipe, "recipeInfo");
    
    return RecipeInfo;
}
export default getRecipeInfo;