import React from "react";
import axios from './axios';
import getIngredients from '@features/Ingredients/getIngredients.jsx';

const getUseffect = (query, fnctn, objName, arraydep, calltype) => 
{
    React.useEffect(() => 
    {
        const fetchData = async () => 
        {
            const response = await axios.get(query);

            try
            {
                if(response.status === 200)
                {
                    //Statement for getRecipeInfo function
                    if(calltype === "recipeInfo")
                    {
                        const MealsResponse = response.data[objName][0];
                        //Save the main ingredients of the selected receipe
                        const IngredientsData = []
    
                        getIngredients(IngredientsData, MealsResponse);
                        
                        fnctn({
                            Category: MealsResponse.strCategory,
                            Area: MealsResponse.strArea,
                            Ingredients: IngredientsData, 
                            Img: MealsResponse.strMealThumb,
                            Title: MealsResponse.strMeal,
                            Tags: MealsResponse.strTags,
                            StepByStep: MealsResponse.strInstructions,
                        })
                    }
                    else {
                        fnctn(response.data[objName]);
                    }
                }
            }
            catch(error){
                throw new Error(error.message);
            }
        };

        fetchData();
  },[arraydep])
}

export default getUseffect;