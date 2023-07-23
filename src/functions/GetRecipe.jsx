import axios from 'axios';
import React from "react";

//We have a function that will display the recipes depending on the selected country. 
const GetRecipe = (selectedCountry) => 
{ 
  const [recipesData, setRecipesData] = React.useState([]);

  //It will run every time selectedCountry changes
  React.useEffect(() => 
  {  
    const fetchData = async () => 
    {
      
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedCountry}`);

      try
      {
        if(response.status === 200)
        {
          setRecipesData(response.data.meals);
        }
      }
      catch(error){
        throw new Error(error.message);
      }
    };

    fetchData();
    
  },[selectedCountry])


  return recipesData;
}

export default GetRecipe;