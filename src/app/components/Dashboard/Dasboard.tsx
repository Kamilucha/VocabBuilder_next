import { useState } from "react";
import Categories from "../Filters/Categories";
import FindFilterForm from "../Filters/FindFilter";
import styles from "./styles.module.scss";

export default function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const categories = [
    "verb",
    "participle",
    "noun",
    "adjective",
    "pronoun",
    "numerals",
    "adverb",
    "preposition",
    "conjunction",
    "phrasal verb",
    "functional phrase",
  ];

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearch = (query: string) => {
    console.log(`Searching for dasboard: ${query}`);
  };
  return (
    <>
      <div className={styles.filters_wrapper}>
        <FindFilterForm onSearch={handleSearch}></FindFilterForm>
        <Categories
          categories={categories}
          onSelectCategory={handleSelectCategory}
        ></Categories>
      </div>
    </>
  );
}
