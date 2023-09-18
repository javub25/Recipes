import React from "react";
import introRecipes from "@assets/intro-recipes01.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faHeart, faFlag, faMugSaucer, faLeaf, faCakeCandles } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => 
{
    return (
        <>
            <main>
                <section className="w-4/5 mobile:w-full mt-40 mobile:mt-20 px-8 mx-auto mb-40">
                    <div className="bg-white">
                        <div className="flex items-center justify-center mb-8 pt-8 mobile:flex-col px-8">
                            <h1 className="text-3xl font-bold text-green-500 text-center">DISCOVER THE FLAVOR OF THE WORLD IN YOUR KITCHEN</h1>
                            <FontAwesomeIcon icon={faGlobe} className="align-top text-2xl text-green-600 pl-4 mobile:mt-4"/>
                        </div>

                        <div className="px-8 ">
                            <h2 className="text-2xl text-green-800 font-bold text-center">TASTY DISHES AT YOUR FINGERTIPS</h2><br/>
                        </div>
                        
                        <div className="flex justify-center items-center flex-wrap mb-8">
                            <div className="w-4/6 tablets:w-full px-8">
                                <p className="text-1xl text-left italic pr-4 tablets:pr-0">
                                    Are you ready to enter the appetizing world of cooking?
                                    <br />
                                    Sharing creative recipes will help you create <b>extraordinary dishes from different countries around the world</b> in the comfort of your own kitchen.
                                    <br/><br/>
                                    In addition, you can create your own list of favorite recipes and access them at any time.
                                    <br/><br/>
                                    When you find a recipe you like, simply click on the <b>Add to Favorites</b> button. <FontAwesomeIcon icon={faHeart} className="text-red-600 animate__animated animate__zoomIn animate__slow animate__infinite"/> so you can access them whenever you need them.
                                </p>
                            </div>
                            <div className="w-1/3 tablets:w-full pt-8">
                                <img src={introRecipes} className="w-full"/>
                            </div>
                        </div>

                        <div className="px-8">
                            <h3 className="text-2xl text-green-800 font-bold text-center">AVAILABLE RECIPES</h3><br/>
                        </div>
                        
                        <div className="bg-[url(../src/assets/img/intro-recipes02.jpg)] bg-cover bg-center bg-no-repeat bg-fixed h-96 mt-4">
                        </div>

                        <div className="mt-8 px-8 grid grid-cols-2 gap-8 mobile:grid-cols-1 text-center">
                            <div>
                                <FontAwesomeIcon icon={faFlag} className="text-2xl mb-2"/>
                                <h2 className="font-bold">International Cuisine</h2>
                                <p>
                                    Discover authentic flavors from different cultures
                                </p>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faMugSaucer} className="text-2xl mb-2"/>
                                <h2 className="font-bold">Breakfasts</h2>
                                <p>
                                    They will give you energy and flavor
                                </p>
                            </div>

                            <div>
                                <FontAwesomeIcon icon={faLeaf} className="text-2xl mb-2"/>
                                <h2 className="font-bold">Vegetarians and Vegans</h2>
                                <p>
                                    Tasty recipes you will love
                                </p>
                            </div>
                            
                            <div>
                                <FontAwesomeIcon icon={faCakeCandles} className="text-2xl mb-2"/>
                                <h2 className="font-bold">Sweets and Desserts</h2>
                                <p>
                                    The perfect end to any meal
                                </p>
                            </div>
                        </div>
                        <div className="p-8">
                            <h2 className="font-bold text-2xl text-center">And much more...</h2>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default HomePage;