import React from "react";
import Controlled from "./components/Controlled";
import Uncontrolled from "./Uncontrolled";

function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-6">
      <Controlled />
      <Uncontrolled />
    </main>
  );
}

export default App;
