import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from "react";
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage.jsx";
import RecipeDetails from "./components/RecipeDetails.jsx";

//Let's change body color
const body = document.getElementsByTagName("body")[0];
body.classList.add("bg-slate-200");


/*At this point, our app will have an initial component where the recipes will be displayed based on the user's choice of country, 
all this will be inside the HomePage component.*/

/*The second component called RecipeDetails will display the information of the recipe chosen by the user.*/
function App() {
  return (
    <>
      <div className="App mx-auto px-6">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/recipe-details" element={<RecipeDetails/>}/>         
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App;
