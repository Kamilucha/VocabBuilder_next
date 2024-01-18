"use client";

import Dashboard from "../components/Dashboard/Dasboard";
// import FindFilterForm from "../components/Filters/FindFilter";

export default function Dictionary() {
  // const handleSearch = (query: string) => {
  //   console.log(`Searching for dictionary page: ${query}`);
  // };

  return (
    <>
      <h1>Dictionary page</h1>
      <Dashboard></Dashboard>
      {/* <FindFilterForm onSearch={handleSearch}></FindFilterForm> */}
    </>
  );
}
