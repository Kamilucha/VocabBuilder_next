"use client";

import FindFilterForm from "../components/FindFilter/FindFilter";

export default function Recommend() {
  const handleSearch = (query: string) => {
    console.log(`Searching for recommend page: ${query}`);
  };
  return (
    <>
      <h1>Recommend page</h1>
      <FindFilterForm onSearch={handleSearch}></FindFilterForm>
    </>
  );
}
