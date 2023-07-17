import axios from 'axios';
import React from "react";

const GetCountryList = () => 
{ 
  const [country, setcountry] = React.useState([]);

  React.useEffect(() => 
  {
    
    const fetchData = async () => 
    {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);

      try
      {
        if(response.status === 200)
        {
            setcountry(response.data.meals);
        }
      }
      catch(error){
        throw new Error(error.message);
      }
    };

    fetchData();
    
  },[])
  return country;
}

export default GetCountryList;