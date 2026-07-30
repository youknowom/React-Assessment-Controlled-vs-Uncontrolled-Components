import React, { useRef } from "react";

function Uncontrolled() {
  const inputRef = useRef();

  const handleClick = () => {
    alert(inputRef.current.value);
  };

  return (
    <div className="w-full max-w-sm flex flex-col items-center gap-4 text-center">
      <h1 className="text-xl font-medium">Uncontrolled Component</h1>

      <input
        type="text"
        placeholder="Enter Name"
        ref={inputRef}
        className="w-full rounded border border-gray-300 px-3 py-2"
      />

      <button
        onClick={handleClick}
        className="rounded border border-gray-300 px-4 py-2"
      >
        Display
      </button>
    </div>
  );
}

export default Uncontrolled;
