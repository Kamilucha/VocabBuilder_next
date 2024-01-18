"use client";

import Dashboard from "../components/Dashboard/Dasboard";

// import FindFilterForm from "../components/Filters/FindFilter";

export default function Training() {
  // const handleSearch = (query: string) => {
  //   console.log(`Searching for training page: ${query}`);
  // };
  return (
    <>
      <h1>Training page</h1>
      <Dashboard></Dashboard>
      {/* <FindFilterForm onSearch={handleSearch}></FindFilterForm> */}
    </>
  );
}
