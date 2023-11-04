"use client";

import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const queryParam = searchParams.get("query");
  const [searchQuery, setSearchQuery] = useState(queryParam || "");

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`?query=${searchQuery}`);
  };

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search-dropdown"
        className="w-72 p-3 border-2 rounded-full pl-10 sm:w-64 md:w-80"
        placeholder="Pesquisar notas"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="absolute right-3 top-3" type="submit">
        <Search />
      </button>
    </form>
  );
};

export default SearchBar;
