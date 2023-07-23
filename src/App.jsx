import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react";
import './index.css'
import Recipes from './components/Recipes.jsx'
import Countries from './components/Countries.jsx'
import GetRecipe from './functions/GetRecipe.jsx'
import GetCountryList from './functions/GetCountriesList.jsx';

function App() {
  const countriesData = GetCountryList();

  // ### Code to obtain the area of the country chosen by the user to display the recipes.
  const [selectedCountry, setSelectedCountry] = React.useState("");

  //Event that will save each value of select
  const getCountry = (event) => {
    setSelectedCountry(event.target.value);
  };
  // Once the country area has been chosen, the recipes are displayed.
  const recipesData = GetRecipe(selectedCountry);
  
  return (
    <>
      <div className="App mx-auto">

        <section className="text-center">
            <select name="countries" className="country-list" onClick={getCountry}>
              <option value=""> -- Choose your area -- </option>
              {countriesData.map((country => {
                  return(
                    <Countries
                      key = {country.strArea} 
                      Country = {country.strArea}
                    />
                  )}
                  )
                )
              }
            </select>
            {
              recipesData!==null &&

              <div className="xl:w-4/5 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 content-center mx-auto">
            {recipesData.map((recipe => 
              {
               return (
                  <Recipes 
                      key = {recipe.idMeal}
                      img = {recipe.strMealThumb}
                      title = {recipe.strMeal}
                  />
                )
              }
            ))}
            </div>
            }

            
        </section>

      </div>
    </>
  )
}

export default App;
