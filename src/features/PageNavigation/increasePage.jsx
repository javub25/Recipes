/**
 * The function increases the page number by 1 if it is less than the length of recipes.
 */
const increasePage = (page, ftn, lengthRecipes) => 
{
    if(page < lengthRecipes) ftn(oldState => oldState+=1)
    
}
export default increasePage;
