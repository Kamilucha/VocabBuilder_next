"use client";

import FindFilterForm from "../components/FindFilter/FindFilter";

export default function Dictionary() {
  const handleSearch = (query: string) => {
    console.log(`Searching for dictionary page: ${query}`);
  };
  return (
    <>
      <h1>Dictionary page</h1>
      <FindFilterForm onSearch={handleSearch}></FindFilterForm>
    </>
  );
}
