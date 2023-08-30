
const deleteFavourite = (idRecipe, removedFavorites, setRemovedFavorites) =>
{
    //It will return an object whose key doesn't contain the same RecipeID to be deleted.
    setRemovedFavorites(removedFavorites.filter(item => item.id !== idRecipe))
       
    localStorage.setItem("FavouriteList", JSON.stringify(removedFavorites))
}

export default deleteFavourite;