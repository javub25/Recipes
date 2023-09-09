import React from "react";
import getUseffect from '@api/getUseffect.jsx';

//We have a function that will display the recipes depending on the selected country or category.
const GetRecipe = (queryLetter, queryValue) => 
{ 
  const [recipesData, setRecipesData] = React.useState([]);

  getUseffect(`filter.php?${queryLetter}=${queryValue}`, setRecipesData, "meals", queryValue);

  return recipesData;
}

export default GetRecipe;