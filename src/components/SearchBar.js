import { useState } from "react";

export default function SearchBar() {
  const [input, setInput] = useState("");

  return (
    <form className="max-w-6xl mx-auto flex  justify-between items-center px-5">
      <input
        type="text"
        vaslue={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search title..."
        className="flex-1 w-full h-8 rounded-sm  placeholder-gray-500 text-gray-500
        outline-none bg-transparent"
      />
      <button
        type="submit"
        disabled={!input}
        className="text-blue-700 disabled:text-gray-400  "
      >
        Search
      </button>
    </form>
  );
}
