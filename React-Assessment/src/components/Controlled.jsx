import React, { useState } from "react";

function Controlled() {
  const [name, setName] = useState("");

  return (
    <div className="w-full max-w-sm flex flex-col items-center gap-4 text-center">
      <h1 className="text-xl font-medium">Controlled Component</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded border border-gray-300 px-3 py-2"
      />

      <h3 className="text-base">Name: {name}</h3>
    </div>
  );
}

export default Controlled;
