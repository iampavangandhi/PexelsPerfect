import React from "react";

import ImageCard from "./ImageCard";

function ImagesSection({ loading, pexelsResponse }) {
  return (
    <div className="flex flex-wrap justify-evenly lg:p-9 md:p-6 sm:p-3 m-auto bg-gray-50 w-full">
      {!loading &&
        pexelsResponse.photos.length > 0 &&
        pexelsResponse.photos.map((photo) => {
          return <ImageCard photo={photo} />;
        })}
      {!loading && pexelsResponse.photos.length === 0 && (
        <h1 className="text-3xl p-2 m-5 h-96 m-5 sm:m-10 text-gray-600 font-semibold">
          Images Not Found
        </h1>
      )}
      {loading && (
        <h1 className="text-3xl p-2 m-5 h-96 m-5 sm:m-10 text-gray-600 font-semibold">
          Loading Images...
        </h1>
      )}
    </div>
  );
}

export default ImagesSection;
