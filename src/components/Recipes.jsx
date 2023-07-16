import ReactDOM from "react-dom/client";
import React from "react";
import 'animate.css';

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
            <div className="px-4 pt-8">
                <img src={props.img} className="w-full rounded-lg"/>                
            </div>
            
            <div className="px-4 py-6 bottom-0 mx-auto w-full">
                <h2 className="text-center text-black font-bold text-slate-600">{props.title}</h2>
            </div>
        </div>
    )
}
export default Recipes;
