"use client";

import { ChangeEvent } from "react";
import styles from "./styles.module.scss";

type CategorySelectProps = {
  categories: string[];
  onSelectCategory: (category: string) => void;
};
const Categories: React.FC<CategorySelectProps> = ({
  categories,
  onSelectCategory,
}) => {
  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = event.target.value;
    onSelectCategory(selectedCategory);
    console.log(selectedCategory);
  };

  return (
    <select
      className={styles.select_categories}
      onChange={handleCategoryChange}
    >
      <option value="">Select Category</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default Categories;
