const addFavourite = (props) => 
    {
        props.Favourite[1]((oldState) => !oldState)
        
        if(props.Favourite[0]) {

            let FavouriteData = {
                
                    photo: props.DataRecipe.Img,
                    title:  props.DataRecipe.Title,
                    id: props.Idrecipe
            }
            const foundRecipe = props.FavouriteList[0].some(item => item.id === props.Idrecipe)

            if(!foundRecipe)
            {
                props.eventHandler.target.classList.add("text-red-600");
                props.FavouriteList[1](oldState => [...oldState, FavouriteData])
                localStorage.setItem("FavouriteList", JSON.stringify([...props.FavouriteList[0], FavouriteData]))
            }
            else {
                alert("This Recipe has been added previously")
            }
          }  
        else {
            props.eventHandler.target.classList.remove("text-red-600");
        }
    }

    export default addFavourite;