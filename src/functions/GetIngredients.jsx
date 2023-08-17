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
    let measures;
    do
    {
         //Access to each property from value to strIngredient1 to strIngredient20    
         ingredient = MealsResponse[`strIngredient${countIngredients}`];

         //Access to each property from value to strMeasure1 to strMeasure20    
         measures = MealsResponse[`strMeasure${countIngredients}`];

        //Only values that are text will be saved
         if(ingredient!==null && ingredient!==""){
            //Add measurements before the ingredient with empty space added.
            Ingredients.push(measures.concat(" ",ingredient));
        }
        i++;
        countIngredients++;
    }while(ingredient!==null && ingredient!=="" && i<=posLastIngredient);
}

export default GetIngredients;