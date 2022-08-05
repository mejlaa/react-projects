import React from "react";

const Book = () => {
  return (
    <div>
      <Image />
      <Title />
      <Author />
    </div>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/71HuyKCcs4L._AC_UL906_SR906,600_.jpg"
      alt=""
      style={{ width: 400 }}
    />
  );
};

const Title = () => <h2>The Seven Husbands of Evelyn Hugo</h2>;

const Author = () => <h4>Taylor Jenkins Reid</h4>;

export default Book;
