import React from "react";
import getUseffect from "@api/getUseffect.jsx";

const getCountries = () => 
{ 
  const [country, setcountry] = React.useState([]);
  
  getUseffect("/list.php?a=list", setcountry, "meals", null);

  return country;
}

export default getCountries;