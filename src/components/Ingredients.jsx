const Ingredients = ({Recipe}) => {
    return (   
        Recipe.Ingredients.map((ingredient, index) => {
            return (
                <div className="flex xl:w-1/3 pr-4 pb-4">
                    <div className="bg-green-500 px-2 rounded-lg">
                        <p className="text-white font-bold" key={index}>{index+1}</p>
                    </div>

                    <div className="pl-2">
                        <p className="text-white font-bold" key={index}>{ingredient}</p>
                    </div>
                </div>
            )
        })    
    );
};

export default Ingredients