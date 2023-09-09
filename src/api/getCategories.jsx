import getUseffect from "@api/getUseffect.jsx";
import React from "react"

const getCategories = () => 
{ 
  const [savedCategories, setSavedCategories] = React.useState([]);

  getUseffect("categories.php", setSavedCategories, "categories", null);
  
  return savedCategories;
}

export default getCategories;