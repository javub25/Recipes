import React from 'react';
import getCategories from '@api/getCategories.jsx'
import Recipes from '@features/Recipes/Recipes.jsx'

const Categories = () => 
{
    const CategoryList = getCategories();


    return (
        <>
          <section className="text-center mt-40 mobile:mt-20 px-4 mb-40">
            <h1 className="text-2xl pb-8">Categories</h1>
            {
                <div className="xl:w-4/5 grid sm:grid-cols-3 xl:grid-cols-5 gap-x-1 gap-y-8 content-center mx-auto pb-8">
                    {
                    CategoryList.map((categories => 
                        {
                            return(
                                <Recipes 
                                    key = {categories.idCategory}
                                    img = {categories.strCategoryThumb}
                                    title = {categories.strCategory}
                                    view = "categories"
                                />
                            )
                        }))
                    }
                </div>
            }
          </section>
        </>
    )
}

export default Categories;