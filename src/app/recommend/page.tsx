"use client";

import Dashboard from "../components/Dashboard/Dasboard";
import styles from "../page.module.css";

export default function Recommend() {
  // const handleSearch = (query: string) => {
  //   console.log(`Searching for recommend page: ${query}`);
  // };
  return (
    <>
      <div className={styles.container}>
        <h1>Recommend page</h1>
        <Dashboard></Dashboard>
        {/* <FindFilterForm onSearch={handleSearch}></FindFilterForm> */}
      </div>
    </>
  );
}
