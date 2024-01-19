"use client";

import { useState } from "react";
import styles from "./styles.module.scss";
import FindIcon from "./svg/FindIcon";

type SearchFormProps = {
  onSearch: (query: string) => void;
};

const FindFilterForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };
  return (
    <form className={styles.find_form}>
      <div className={styles.search_container}>
        <input
          className={styles.find_word_input}
          type="text"
          placeholder="Find the word"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <div>
          <FindIcon></FindIcon>
        </div>
      </div>
    </form>
  );
};

export default FindFilterForm;
