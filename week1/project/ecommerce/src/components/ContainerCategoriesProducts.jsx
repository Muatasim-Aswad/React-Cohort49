import React, { useState } from 'react';
import Categories from './Categories';
import Products from './Products';
import products from '../fake-data/all-products';
import fakeCategories from '../fake-data/all-categories';

const categories = fakeCategories.map((category) =>
  category.replace('FAKE: ', ''),
);

const ContainerCategoriesProducts = () => {
  const [category, setCategory] = useState(categories[0]);

  const changeCategory = (newCategory) => {
    setCategory(newCategory);
  };

  const filteredProducts = products.filter(
    (product) => category === product.category,
  );

  return (
    <div className="container">
      <Categories
        categories={categories}
        currentCategory={category}
        changeCategory={changeCategory}
      />
      <Products currentCategory={category} products={filteredProducts} />
    </div>
  );
};

export default ContainerCategoriesProducts;
