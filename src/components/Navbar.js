import React from "react";

export default function Navbar({ inputValue, handleChange, handleSubmit }) {
  return (
    <div className="flex justify-between items-center w-full p-4">
      <div className="text-2xl text-semibold">
        <a className="flex cursor-pointer" href="/">
          <div className="shadow-md lg:p-5 lg:m-1 lg:mx-2 lg:border-4 lg:border-black"></div>
          Pexels <br /> Perfect
        </a>
      </div>
      <form className="search-form flex">
        <input
          type="text"
          id="search"
          placeholder="Search for anything... e.g. Nature, Sports,.."
          value={inputValue}
          onChange={(e) => handleChange(e.target.value)}
          className="form-input shadow-md w-48 sm:w-96 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent m-2 px-5 py-3 rounded"
        />
        <button
          type="submit"
          className="submit-btn shadow-md text-white hidden md:block font-semibold m-2 px-5 py-3 rounded bg-blue-600 hover:bg-blue-700"
          onClick={handleSubmit}
        >
          Search
        </button>
      </form>
    </div>
  );
}
