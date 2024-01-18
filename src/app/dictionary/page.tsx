"use client";

import Dashboard from "../components/Dashboard/Dasboard";
import styles from "../page.module.css";

export default function Dictionary() {
  // const handleSearch = (query: string) => {
  //   console.log(`Searching for dictionary page: ${query}`);
  // };

  return (
    <>
      <div className={styles.container}>
        <h1>Dictionary page</h1>
        <Dashboard></Dashboard>
        {/* <FindFilterForm onSearch={handleSearch}></FindFilterForm> */}
      </div>
    </>
  );
}
