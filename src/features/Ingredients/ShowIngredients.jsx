const ShowIngredients = ({Recipe}) => {
    return (   
        Recipe.Ingredients.map((ingredient) => {
            return(
                <div className="ingredients flex pb-10 items-center">
                    <div className="flex items-center px-4">
                        <div className="ImgSpace">
                            <img src={`https://www.themealdb.com/images/ingredients/${ingredient.name}-Small.png`}/>
                        </div>
                        <div>
                            <p className="text-center">{ingredient.name}<br/>{ingredient.measures}</p>
                        </div>
                    </div>
                </div>
            )
        })    
    );
};

export default ShowIngredients