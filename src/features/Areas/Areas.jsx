import GetRecipe from '@api/getRecipe.jsx'
import GetCountryList from '@api/getCountries.jsx';
import React from 'react';
import RecipePages from "@features/Recipes/RecipesPages.jsx";
 
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
    const recipesData = GetRecipe("a", selectedCountry);
    const [page, setpage] = React.useState(0);
    const lengthRecipes = recipesData.Pages.length - 1;

    console.log(recipesData.Pages)
    return (
        <>
        <section className="text-center mt-40 mobile:mt-20 px-4">
            <h1 className="text-2xl">Which area do you want to find out the recipes?</h1>
            <select name="countries" className="text-md w-52 country-list shadow-xl py-4 px-2 mt-12 border-solid border-r-8 border-transparent" onClick={getCountry}> 
            <option value="" className="text-left">Choose option</option>

              {countriesData.map((country => <option key = {country.strArea} value={country.strArea} className="text-left">{country.strArea}</option>)
              )
            }
          </select>
        {
          recipesData.Pages!==null &&
          <>
            {
            recipesData.Total > 0 &&

              <>
                <div className="py-16">
                  <h3>Great! it seems we found <b>{recipesData.Total} {recipesData.Total === 1 ? "recipe" : "recipes"}</b>.</h3>
                </div>
                {
                  RecipePages(recipesData, page, setpage, lengthRecipes)
                }
              </>
            }
          </>
        }
        </section>
        </>
    )
}

export default Areas;