import React from "react";
import { useState } from "react";
import SearchInput1 from "./searchInput";

const SearchList1 = (props) => {
  const { search } = props;

  const list = [
    { name: "Mejla Ugljanin", age: 27 },
    { name: "Majda Ugljanin", age: 58 },
    { name: "Mirza Salkovic", age: 28 },
    { name: "Nadia Salkovic", age: 10 },
    { name: "Suad Suljovic", age: 29 },
    { name: "Bla Blabic", age: 68 },
    { name: "Nenad Zimonjic", age: 30 },
    { name: "Petar Petrovic", age: 18 },
  ];

  const filteredList = list.filter((person) => {
    if (search === "") return false;
    return person.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      {filteredList.map((person) => {
        return <p>{person.name}</p>;
      })}
    </div>
  );
};

export default SearchList1;
