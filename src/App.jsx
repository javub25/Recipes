import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Recipes from './components/Recipes.jsx'
import GetRecipe from './functions/GetRecipe.jsx'

function App() {
  const recipesData = GetRecipe();

  let RecipesData = recipesData.map((value => 
    {
      return (
      <Recipes 
        key = {value.idMeal}
        img = {value.strMealThumb}
        title={value.strMeal}
        />
      )
    }))

  return (

    <>
      <div className="App mx-auto">
        <div className="xl:w-4/5 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 content-center mx-auto">
            {RecipesData}
        </div>
      
      </div>
    </>
  )
}

export default App
