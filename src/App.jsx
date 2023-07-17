import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Recipes from './components/Recipes.jsx'
import Countries from './components/Countries.jsx'
import GetRecipe from './functions/GetRecipe.jsx'
import GetCountryList from './functions/GetCountriesList.jsx';


/*const GetCurrentCountry = () => 
  {
    let CountryList = document.querySelector(".country-list");
    let CountryChosen = CountryList.selectedOptions;
    return CountryChosen[0].label;
  }
*/

function App() {
  const countriesData = GetCountryList();
  const recipesData = GetRecipe();
  
  return (
    <>
      <div className="App mx-auto">

        <section className="text-center">
            <select name="countries" className="country-list">
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
        </section>

      </div>
    </>
  )
}

export default App;
