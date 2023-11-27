"use client";
import { useState } from "react";

type SearchInputProps = {
  onSearch: (query: string) => void;
};

const InputSearch: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };
  return (
    <>
      <div className="flex">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
    </>
  );
};

export default InputSearch;
