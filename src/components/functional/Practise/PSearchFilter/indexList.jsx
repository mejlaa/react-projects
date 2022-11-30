import React from "react";

const PSearchFilterList = (props) => {
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

  const searchList = list.filter((person) => {
    if (search === "") return false;
    return person.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      {searchList.map((person) => {
        return <p>{person.name}</p>;
      })}
    </div>
  );
};

export default PSearchFilterList;
