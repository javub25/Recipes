
import axios from 'axios';
import React from "react";

/*We're gonna get img, title, tags and instructions besides to idRecipe regarding Recipe chosen by user*/
const GetRecipeInfo = (idRecipe) => 
{
    //Object will store that data for each recipe
    const [RecipeInfo, setInfo] = React.useState({
            Img: "",
            Title: "",   
            Tags: "",
            StepByStep:"",
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
                    setInfo({
                        Img: response.data.meals[0].strMealThumb,
                        Title: response.data.meals[0].strMeal,
                        Tags: response.data.meals[0].strTags,
                        StepByStep: response.data.meals[0].strInstructions,
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
