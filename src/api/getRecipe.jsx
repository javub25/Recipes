import React from "react";
import getUseffect from '@api/getUseffect.jsx';

//We have a function that will display the recipes depending on the selected country or category.
const getRecipe = (queryLetter, queryValue) => 
{ 
  
  const [recipesData, setRecipesData] = React.useState([]);

  /* The `getUseffect` function is a custom function that is being imported from the `getUseffect.jsx`
  file. It is used to make an API call to retrieve data based on the provided query parameters. */

  getUseffect(`filter.php?${queryLetter}=${queryValue}`, setRecipesData, "meals", queryValue);

  let recipesPage = new Array(), totalRecipes;

  /* The code inside the `try` block is responsible for organizing the recipes into pages. */
  try
  {
    let page = 0, index = 0, Mealslength = recipesData.length - 1,
    addrecipes = true;
    totalRecipes = 0;

    do
    {
      let recipesByPage = 0;
      recipesPage.push([]);

      do
      {
        if(totalRecipes<=Mealslength)
        {
         
          recipesPage[page].push(recipesData[index]);
          
          recipesByPage ++;
          index++;
          totalRecipes++;          
        }

        else addrecipes = false;
        
      }while(recipesByPage < 10 && addrecipes === true);

      page++;
            
    }while(addrecipes === true && totalRecipes<=Mealslength);
    
  }catch(error)
  {
    console.error(error);
  }

  return {
    Pages: recipesPage,
    Total: totalRecipes
  }
}

export default getRecipe;