import React from "react";

function Wrapper({ children }) {
  return (
    <div className="flex flex-col items-center bg-gray-100 w-full h-full">
      {children}
    </div>
  );
}

export default Wrapper;
