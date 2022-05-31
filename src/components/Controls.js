import React from "react";

function Controls({
  loading,
  pexelsResponse,
  query,
  setQuery,
  setPexelsResponse,
}) {
  const prev = () => {
    setQuery((val) => {
      return { ...val, page: val.page - 1 };
    });
    setPexelsResponse((val) => {
      return { ...val, totalResponses: val.totalResponses + query.page * 20 };
    });
  };

  const next = () => {
    setQuery((val) => {
      return { ...val, page: val.page + 1 };
    });
    setPexelsResponse((val) => {
      return { ...val, totalResponses: val.totalResponses - query.page * 20 };
    });
  };

  return (
    <div className="flex m-4" id="controls">
      {query.page > 1 && (
        <button
          className="text-white font-semibold m-2 px-5 py-3 rounded bg-blue-600 hover:bg-blue-700"
          onClick={() => prev()}
        >
          Prev
        </button>
      )}

      {query.page === 1 && (
        <button className="text-gray-400 cursor-not-allowed font-semibold m-2 px-5 py-3 rounded border-4 border-gray-300">
          Prev
        </button>
      )}

      <div className="text-blue-600 hover:text-blue-700 cursor-not-allowed text-lg font-semibold m-2  px-10 py-3 rounded bg-white border-2 border-blue-600 hover:border-blue-700">
        {query.page}
      </div>

      {pexelsResponse.totalResponses - query.page * 20 > 20 && (
        <button
          className="text-white font-semibold m-2 px-5 py-3 rounded bg-blue-600 hover:bg-blue-700"
          onClick={() => next()}
        >
          Next
        </button>
      )}

      {!(pexelsResponse.totalResponses - query.page * 20 > 20) && (
        <button className="text-gray-400 cursor-not-allowed font-semibold m-2 px-5 py-3 rounded border-4 border-gray-300">
          Next
        </button>
      )}
    </div>
  );
}

export default Controls;
