
import getRecipeInfo from '@api/getRecipeInfo.jsx'
import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faCutlery } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Ingredients from "@features/Ingredients/ShowIngredients.jsx";
import addFavourite from '@features/Favourites/addFavourite.jsx';
/*It will return details about each selected recipe*/
const RecipeDetails = () => 
{
    const location = useLocation();
    //We're gonna use URLSeachParams object to get our RecipeID from URL
    const searchParams = new URLSearchParams(location.search);
    //Le's get RecipeID from URL from Recipes component
    const RecipeID = searchParams.get('recipeId');

    const RecipeDetails = getRecipeInfo(RecipeID);

    const [favouriteStatus, setfavouriteStatus] = React.useState(false)
    const [FavouriteList, setFavouriteList] = React.useState(() => JSON.parse(localStorage.getItem("FavouriteList")) || [])

    

    return (
        <>
        {/*Adding forks between RECIPES title*/}
        <header className="flex p-6 justify-center">
            <FontAwesomeIcon icon={faCutlery} className="text-green-500 text-3xl pr-4"/>
            <h1 className="text-3xl font-bold">RECIPES</h1>
            <FontAwesomeIcon icon={faCutlery} className="text-green-500 text-3xl pl-4"/>
        </header>

        <section className="bg-white animate__animated animate__fadeIn animate__slow">
            <div className="recipes w-full items-center mx-auto">  
            {/*Div Img: Width:33%*/}
                <div className="w-1/3 relative">
                <div className="p-6">
                    <img src={RecipeDetails.Img} className="imgReceipe w-full rounded-lg"/>                
                </div>
                <div className="absolute bottom-0 mx-auto w-full p-6">
                    <div className="py-2 bg-black rounded-b-lg">
                        <h1 className="text-center text-white font-bold text-lg">{RecipeDetails.Title}</h1>
                    </div>
                </div>
                </div>
            {/*Div Info: Width:66%*/}
                <div className="w-2/3 px-6">
                    <h2><b>Area:</b> {RecipeDetails.Area}</h2>
                    
                    <h2><b>Category:</b> {RecipeDetails.Category}</h2>
                    {/*Comment JSX: This only appear when there are tags*/}
                    {RecipeDetails.Tags !==null && RecipeDetails.Tags !=="" ?
                    <div className="w-48 p-2 bg-orange-400 my-5">
                        <h2 className="text-center text-white font-bold text-slate-600 break-words text-sm">{RecipeDetails.Tags}</h2>
                    </div>
                    : ""
                    }   
                </div>
            </div>

             {/*Render the ShowIngredients component */}
             <div className="pt-8 p-4">
                    <h2 className="text-3xl font-bold text-black text-center italic">Ingredients</h2>

                    <div className="flex flex-wrap items-center justify-center pt-16">
                        <Ingredients Recipe = {RecipeDetails}/>
                    </div>
                </div> 

            

            {/*pt-14 : padding-top:48px / pb-16: padding-bottom:64px*/}
            <div className="pt-14 pb-16">
                <div className="bg-[url(../src/assets/img/recipes-bg.jpg)] bg-cover bg-center bg-no-repeat bg-fixed h-96">
                </div>
            </div>



            {/*Instructions containers*/}
            <div className="px-6 pb-6">
                <div className="flex justify-center">
                    {/*pr-4 --> Padding-right: 16px; mt-2 --> Margin-top: 8px*/}
                    {/*text-2xl --> Font-size: 24px*/}
                    <FontAwesomeIcon icon={faBook} className="text-green-500 text-2xl pr-4 mt-2"/>
                    {/*text-3xl --> Font-size: 30px*/}
                    <h1 className="text-3xl font-bold text-black text-center italic">How could I do it?</h1>
                </div>
                <br/>

                <div className="p-6 border-solid border-green-400 border-2 border-l-8 rounded-md">
                    <p>{RecipeDetails.StepByStep}</p>
                </div>
            </div>

            <div className="flex items-center px-6">
                <FontAwesomeIcon icon={faHeart} className="text-3xl pr-4" 
                    onClick={(e) => addFavourite(
                        {
                            eventHandler: e, 
                            Idrecipe: RecipeID,
                            DataRecipe: RecipeDetails,
                            Favourite: [favouriteStatus, setfavouriteStatus],
                            FavouriteList: [FavouriteList, setFavouriteList],
                        })
                        }
                    />
                <h2>Add to Favourites</h2>
            </div>

            {/*Arrow icon to return HomePage component*/}
            <div className="px-6 pt-16 pb-6">
                <Link 
                    to = "/">
                    <FontAwesomeIcon icon={faArrowCircleLeft} className="text-green-500 text-5xl"/>
                </Link>
            </div>
        </section>
        </>
    )
}


export default RecipeDetails;