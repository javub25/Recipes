import React from "react";
import Recipes from './Recipes.jsx'
import Countries from './Countries.jsx'
import GetRecipe from '../functions/GetRecipe.jsx'
import GetCountryList from '../functions/GetCountriesList.jsx';

const HomePage = () => 
{
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
        <section className="text-center">

        <select name="countries" className="country-list shadow-xl py-6 px-4 my-12 text-center border-solid border-grey border-2 appearance-none" onClick={getCountry}>
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

          <div className="xl:w-4/5 grid sm:grid-cols-3 xl:grid-cols-5 gap-x-1 gap-y-8 content-center mx-auto">
        {recipesData.map((recipe => 
          {
           return (
              <Recipes 
                  key = {recipe.idMeal}
                  img = {recipe.strMealThumb}
                  title = {recipe.strMeal}
                  idrecipe = {recipe.idMeal}
              />            
            )
          }
        ))}
        </div>
        }
        </section>
        </>
    )
}

export default HomePage;