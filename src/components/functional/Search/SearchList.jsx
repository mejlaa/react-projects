import React from "react";

const SearchList = (props) => {
  const { search } = props;

  const list = [
    { title: "Harry Potter 6" },
    { title: "Harry Potter 5" },
    { title: "Harry Potter 3" },
    { title: "Harry Potter 2" },
    { title: "Harry Potter 1" },
    { title: "Game of Thrones" },
    { title: "Lion King" },
    { title: "Mejla Ugljanin" },
    { title: "Mirza Salkovic" },
    { title: "Meki Mexy Mex" },
    { title: "How to train your dragon" },
  ];

  const searchResult = list.filter((movie) => {
    if (search === "") return false;
    return movie.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      {searchResult.map((movie) => {
        return <p>{movie.title}</p>;
      })}
    </div>
  );
};

export default SearchList;
