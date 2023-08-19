
import axios from 'axios';
import React from "react";
import GetIngredients from './GetIngredients';

/*We're gonna get img, title, tags and instructions besides to idRecipe regarding Recipe chosen by user*/
const GetRecipeInfo = (idRecipe) => 
{
    //Object will store that data for each recipe
    const [RecipeInfo, setInfo] = React.useState({
            Category: "",
            Area: "",
            Ingredients: new Array(),
            Img: "",
            Title: "",   
            Tags: "",
            //StepByStep:"",
    });

    React.useEffect(() => 
    {  
        const fetchData = async () => 
        {
            //Our response will return the above mentioned data of the chosen recipe.
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idRecipe}`);

            try
            {
                if(response.status === 200)
                {
                    const MealsResponse = response.data.meals[0];
                    //Save the main ingredients of the selected receipe
                    let Ingredients = [];

                    GetIngredients(Ingredients, MealsResponse);

                    const instructionsText = document.querySelector(".instructions-text");

                    instructionsText.innerHTML = MealsResponse.strInstructions.replace(/\./g, '.<br/>');

                  
                   
                    setInfo({
                        Category: MealsResponse.strCategory,
                        Area: MealsResponse.strArea,
                        Ingredients: Ingredients, 
                        Img: MealsResponse.strMealThumb,
                        Title: MealsResponse.strMeal,
                        Tags: MealsResponse.strTags,
                        //StepByStep: MealsResponse.strInstructions,
                    })
                }
            }
            catch(error){
                throw new Error(error.message);
            }
        };    
        fetchData();
                
    },[idRecipe])

    return RecipeInfo;
}
export default GetRecipeInfo;
