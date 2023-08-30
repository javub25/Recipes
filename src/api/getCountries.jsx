import axios from './axios';
import React from "react";

const getCountries = () => 
{ 
  const [country, setcountry] = React.useState([]);

  React.useEffect(() => 
  {
    
    const fetchData = async () => 
    {
      const response = await axios.get(`/list.php?a=list`);

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

export default getCountries;