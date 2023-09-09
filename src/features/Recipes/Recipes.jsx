import React from "react";
import 'animate.css';
import { Link } from 'react-router-dom';

const Recipes = (props) => 
{
    return (
        <div className="bg-white shadow-xl w-4/5 mx-auto animate__animated animate__zoomIn">
            <div className="px-4 py-8">
                <img src={props.img} className="w-full rounded-lg"/>                
            </div>
            {/*With Link object we'll tell it that we want to pass each IdRecipe by Url when the user clicks More Details*/}
            <div className="pb-8 text-center">
                {/*to --> where Link has to go to send IdRecipe by Url
                   search --> the action that will make idRecipe to be sent by the url. 
                   To obtain the value we will access to recipeId
                */}
                {props.view === "categories" ? (
                    <>
                    <h2 className="text-center text-black">{props.title}</h2>
                    <br/>
                        <Link
                            to={{
                                pathname: '/recipe-categories',
                                search: `?categoryName=${props.title}`
                            }}
                            className="px-4 py-2 text-white bg-green-500 ">
                                Recipes
                        </Link>
                    </>
                ):
                    <Link
                        to={{
                            pathname: '/recipe-details',
                            search: `?recipeId=${props.idrecipe}`
                        }}
                        className="px-4 py-2 text-white bg-orange-400">
                            More Details
                    </Link>
                }
            </div>

        </div>
    )

}
export default Recipes;