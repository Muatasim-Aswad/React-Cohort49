import React, { useState } from 'react';
import Categories from './CategoriesProducts/Categories';
import Products from './CategoriesProducts/Products';
import products from '../fake-data/all-products';
import categories from '../fake-data/prepared-categories';

const ContainerCategoriesProducts = () => {
  const [currentCategory, setCurrentCategory] = useState(categories[0].name);
  const changeCurrentCategory = (newCategory) =>
    newCategory !== currentCategory && setCurrentCategory(newCategory);

  const filteredProducts = products.filter(
    (product) => currentCategory === product.category,
  );

  return (
    <div className="container">
      <Categories
        categories={categories}
        currentCategory={currentCategory}
        changeCurrentCategory={changeCurrentCategory}
      />
      <Products products={filteredProducts} />
    </div>
  );
};

export default ContainerCategoriesProducts;
