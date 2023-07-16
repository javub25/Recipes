import axios from 'axios';
import React from "react";

const GetRecipe = () => 
{ 
  const [recipesData, setRecipesData] = React.useState([]);

  React.useEffect(() => 
  {
    
    const fetchData = async () => 
    {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Spanish`);

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
    
  },[])
  return recipesData;
}

export default GetRecipe;