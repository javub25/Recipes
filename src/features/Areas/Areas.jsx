import Recipes from '@features/Recipes/Recipes.jsx'
import GetRecipe from '@api/getRecipe.jsx'
import GetCountryList from '@api/getCountries.jsx';
import React from 'react';

const Areas = () => 
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
        <section className="text-center mt-24 px-4">
            <h1 className="text-2xl">Which area do you want to find out the recipes?</h1>
            <select name="countries" className="text-md w-52 country-list shadow-xl py-4 px-2 mt-12 border-solid border-r-8 border-transparent" onClick={getCountry}> 
            <option value="" className="text-left">Choose option</option>

              {countriesData.map((country => <option key = {country.strArea} value={country.strArea} className="text-left">{country.strArea}</option>)
              )
            }
          </select>
        {
          recipesData!==null &&
          <>
            {recipesData.length > 0 &&
              <>
                <div className="py-16">
                  <h3>Great! it seems we found <b>{recipesData.length} {recipesData.length === 1 ? "recipe" : "recipes"}</b>.</h3>
                </div>

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
              </>
            }
          </>
        }
        </section>
        </>
    )
}

export default Areas;