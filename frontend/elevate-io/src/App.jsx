import { useEffect, useState } from "react";
import { fetchData } from "./api";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchData().then(setMessage);
  }, []);

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">React + Node.js + MongoDB</h1>
      <p className="mt-4 text-lg">{message}</p>
    </div>
  );
}

export default App;
