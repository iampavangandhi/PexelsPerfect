import React from "react";

function ImageCard({ photo }) {
  const text = photo.url.split("/")[4].split("-").slice(0, -1).join(" ");

  return (
    <div className="relative m-6">
      <img
        effect="blur"
        alt={text}
        key={photo.id}
        src={photo.src.original + "?auto=compress&cs=tinysrgb&h=400"}
        className="image shadow-xl rounded-lg"
      />

      <div className="image-text flex absolute bottom-0 px-2 py-2 w-full text-white bg-gray-900">
        <p className="text-lg truncate w-full">{text}</p>
        <a href={`https://www.pexels.com/photo/${photo.id}/download/`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="download h-7 my-auto ml-2 p-1 cursor-pointer"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default ImageCard;
