import React, { useState } from "react";
import bags from "../data";
import Bag from "../components/Bag";

export default function Bags() {
  const [searchInput, setSearchInput] = useState("");

  // search and filter
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
  };

  const filteredResults = bags.filter((item) => {
    return item.firstName.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <div className="home">
      <h3>Bag List </h3>
      {/* search for the bag */}
      <div>
        <input
          className="search"
          type="search"
          value={searchInput}
          placeholder="Search...bags"
          onChange={(e) => searchItems(e.target.value)}
        />
      </div>

      <div>
        {filteredResults.length > 0 ? (
          filteredResults.map((bag) => (
            <div key={bag.id}>
              <Bag details={bag} />
            </div>
          ))
        ) : searchInput.trim() !== "" ? (
          <p>No results found for "{searchInput}"</p>
        ) : (
          bags.map((bag) => (
            <div key={bag.id}>
              <Bag details={bag} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
