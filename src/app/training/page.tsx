"use client";

import FindFilterForm from "../components/FindFilter/FindFilter";

export default function Training() {
  const handleSearch = (query: string) => {
    console.log(`Searching for training page: ${query}`);
  };
  return (
    <>
      <h1>Training page</h1>
      <FindFilterForm onSearch={handleSearch}></FindFilterForm>
    </>
  );
}
