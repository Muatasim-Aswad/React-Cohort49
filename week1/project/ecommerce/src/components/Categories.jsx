import React from 'react';
import { v4 as uuid } from 'uuid';
import Category from './Category';

const Categories = ({ categories, currentCategory, changeCategory }) => {
  return (
    <div className="categories">
      {categories.map((category) => (
        <Category
          key={uuid()}
          name={category}
          isActive={category === currentCategory}
          changeCategory={changeCategory}
        />
      ))}
    </div>
  );
};

export default Categories;
