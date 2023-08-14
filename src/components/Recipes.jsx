import ReactDOM from "react-dom/client";
import React from "react";
import 'animate.css';
import { Link } from 'react-router-dom';


/*Object that stores the two pictures we have of the hearts.*/
let heartsImg = {
    notfavorite: "/img/outline_favorite_border_black_24dp.png",
    favorite: "/img/outline_favorite_black_24dp.png"
}

//By default the user will not have indicated that he/she has any favorite recipe.
let heart = heartsImg.notfavorite;


const Recipes = (props) => 
{
    const [itemStatus, setitemStatus] = React.useState(false);



    const FavouriteItem = () => 
    {
        setitemStatus((oldState) => !oldState)

        //When you have clicked on the heart it will become a favorite recipe.
        if(itemStatus) heart = heartsImg.favorite;
        
        //If it was in favorite will uncheck it.
        else heart = heartsImg.notfavorite;
    }

    return (
        <div className="shadow-xl w-4/5 mx-auto animate__animated animate__zoomIn relative">
            <div className="absolute right-3.5 my-8">
                <img src={heart} onClick={FavouriteItem} alt="Favourite"/>
        
            </div>
            <div className="px-4 py-8">
                <img src={props.img} className="w-full rounded-lg"/>                
            </div>
            {/*With Link object we'll tell it that we want to pass each IdRecipe by Url when the user clicks More Details*/}
            <div className="pb-8">
                {/*to --> where Link has to go to send IdRecipe by Url
                   search --> the action that will make idRecipe to be sent by the url. 
                   To obtain the value we will access to recipeId
                */}

                <Link
                    to={{
                        pathname: '/recipe-details',
                        search: `?recipeId=${props.idrecipe}`
                    }}
                    className="px-4 py-2 text-white bg-orange-400">
                        More Details
                </Link>
            </div>

        </div>
    )

}
export default Recipes;


