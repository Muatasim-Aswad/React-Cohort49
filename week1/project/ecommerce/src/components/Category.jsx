import React from 'react';

const Category = ({ name, isActive, changeCategory }) => {
  const handleClick = () => changeCategory(name);

  const active = isActive ? 'active' : '';

  return (
    <button onClick={handleClick} className={`category ${active}`}>
      {name}
    </button>
  );
};

export default Category;
