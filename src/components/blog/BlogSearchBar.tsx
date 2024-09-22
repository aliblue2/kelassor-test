"use client";

import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

//BlogSearchBar component
const BlogSearchBar = () => {
  const [query, setquery] = useState("");
  const router = useRouter();
  const handleSearch = async () => {
    if (!query) return;
    router.push(`/blog/search?query=${query}`);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex bg-white py-1 px-2 rounded-xl w-full md:max-w-60 md:mr-auto">
      <input
        onChange={(e) => setquery(e.target.value)}
        className="h-8 rounded-lg p-1 outline-none w-0 grow"
        placeholder="دنبال چه چیزی میگردید؟"
        onKeyDown={handleKeyDown}
      />
      <button
        className="text-neutral-400 hover:text-neutral-800 hover:scale-110 duration-200 active:scale-90"
        onClick={handleSearch}
      >
        <SearchIcon />
      </button>
    </div>
  );
};

export default BlogSearchBar;
