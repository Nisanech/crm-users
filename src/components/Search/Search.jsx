import React from "react";

const Search = () => {
  return (
    <form className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-5 w-full">
      <label htmlFor="search" className="font-Poppins text-gray mb-2 lg:w-2/5 ">
        Buscar usuario
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="search"
          className="bg-gray-50 border border-gray text-black text-sm rounded-lg block w-full lg:w-4/5 pl-10 p-2.5"
          placeholder="Search"
        />
      </div>
    </form>
  );
};

export default Search;
