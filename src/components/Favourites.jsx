
import { Link} from 'react-router-dom';

const Favourites = () => 
{
    
    const Favourite = JSON.parse(localStorage.getItem("FavouriteList")) || []
    
    return (
        <>        
        <h1 className="text-center">Favourite Recipes</h1>
        { Favourite.length > 0 ? (
            <>

                {Favourite.map((favourite => 
                    {
                        return (
                            <div className="favourites items-center justify-center py-8">
                                <div className="md:pr-6">
                                    <img src={favourite.photo} className="w-28"/>
                                </div>
                                <div className="py-4">
                                    <h2>{favourite.title}</h2>
                                    <br/>
                                    <Link
                                        to={{
                                            pathname: '/recipe-details',
                                            search: `?recipeId=${favourite.id}`
                                        }}
                                        className="px-4 py-2 text-white bg-orange-400">
                                            Check Recipe
                                    </Link>
                                </div>
                            </div>)
                }))}
            </>
            
        ):(
            <h2 className="text-center">There aren't exist any favourite recipe</h2>
        )}
        </>   
    )
}


export default Favourites;