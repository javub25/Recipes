

/*We will obtain from the 20 total ingredients, the ones that are neither null nor undefined.*/
const GetIngredients = (Ingredients, MealsResponse) => 
{
    //As strIngredient starts with one, it will be increased to Ingredient 20
    let countIngredients = 1;
    //Get where to allocate the first and last ingredient within the array object
    let posFirstIngredient = Object.keys(MealsResponse).indexOf("strIngredient1");
    let posLastIngredient = Object.keys(MealsResponse).indexOf("strIngredient20")
    

    let ingredient;
    let i = posFirstIngredient;
    do
    {
         //Access to each property from value to strIngredient1 to strIngredient20    
         ingredient = MealsResponse[`strIngredient${countIngredients}`];

        //Only values that are text will be saved
         if(ingredient!==null && ingredient!==""){
            Ingredients.push(ingredient);
        }
        i++;
        countIngredients++;
    }while(ingredient!==null && ingredient!=="" && i<=posLastIngredient);
}

export default GetIngredients;