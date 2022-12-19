import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

function Search() {
  return (
    <form className="flex gap-3 px-4 py-2 border bg-slate-100  w-full rounded-full">
      <span>
        <MagnifyingGlassIcon className="w-5 h-5" />
      </span>
      <input
        type="search"
        placeholder="Search Twitter"
        className=" outline-none flex-1 w-full bg-transparent"
      />
    </form>
  );
}

export default Search;
