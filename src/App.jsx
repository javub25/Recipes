import React from "react";
import './index.css'

import Header from "@features/Header/Header.jsx"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Areas from '@features/Areas/Areas.jsx';
import HomePage from "@features/HomePage/HomePage.jsx"
import RecipeDetails from "@features/Recipes/RecipeDetails.jsx";
import Favourites from "@features/Favourites/ShowFavourites.jsx";
import Categories from '@features/Categories/Categories.jsx';
import RecipesCategories from '@features/Recipes/RecipesCategories.jsx';
import NoMatch from '@pages/NoMatch.jsx';
import Footer from "@features/Footer/Footer.jsx";

//Let's change body color
const body = document.getElementsByTagName("body")[0];
body.classList.add("bg-slate-200");


/*At this point, our app will have an initial component where the recipes will be displayed based on the user's choice of country, 
all this will be inside the HomePage component.*/

/*The second component called RecipeDetails will display the information of the recipe chosen by the user.*/
function App() {

  return (
    <>
        <div className="App mx-auto">
            <Router>
                <Header />
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/areas" element={<Areas/>}/>
                        <Route path="/categories" element={<Categories/>}/>
                        <Route path="/recipe-categories" element={<RecipesCategories/>}/>
                        <Route path="/recipe-details" element={<RecipeDetails/>}/>
                        <Route path="/favourites" element={<Favourites/>}/>
                        <Route path="*" element={<NoMatch/>}/>
                    </Routes>
                <Footer />
            </Router>
        </div>

    </>
  )
}

export default App;