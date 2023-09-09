
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import deleteFavourite from './deleteFavourite.jsx'
import React from "react";

const ShowFavourites = () => 
{
    
    const Favourite = JSON.parse(localStorage.getItem("FavouriteList")) || []
    
    const AddAnimateSwing = (e) => e.target.classList.add("animate__animated", "animate__swing")
    
    const DeleteAnimateSwing = (e) => e.target.classList.remove("animate__animated", "animate__swing")

    const [removedFavorites, setRemovedFavorites] = React.useState(JSON.parse(localStorage.getItem("FavouriteList")))
    
   
    return (
        <>
            <section className="mt-40 mobile:mt-20 px-4">
                <h1 className="text-center">Favourite Recipes</h1>
                { Favourite.length > 0 ? (
                    <>
                    <div className="w-full flex items-center justify-center flex-wrap">
                    {Favourite.map((favourite => 
                            {
                                return (
                                    <div className="favourites items-center justify-center p-8">
                                        <div className="pr-6 pr-Mob">
                                            <img src={favourite.photo} className="w-28"/>
                                        </div>
                                        <div className="py-4">
                                            <h2 className="text-center">{favourite.title}</h2>
                                            <br/>
                                            <div className="text-center">
                                                <Link
                                                    to={{
                                                        pathname: '/recipe-details',
                                                        search: `?recipeId=${favourite.id}`
                                                    }}
                                                className="px-4 py-2 text-white bg-orange-400">
                                                    Check Recipe
                                            </Link>
                                            </div>
                                            <div className="text-center pt-4">
                                            <FontAwesomeIcon icon={faCircleXmark} onMouseOver={AddAnimateSwing} onMouseOut={DeleteAnimateSwing} onClick={() => deleteFavourite(favourite.id, removedFavorites, setRemovedFavorites)} className="text-2xl"/>
                                            </div>
                                        </div>
                                    
                                    </div>)
                        }))}




                    </div>

                        
                    </>
                    
                ):(
                    <h2 className="text-center">There aren't exist any favourite recipe</h2>
                )}
            </section>        
        </>   
    )
}


export default ShowFavourites;