import React, { useEffect, useState } from "react";
import contactApi from "../../../api/api";

const Contact = () => {
  const [randomContact, setRandomContact] = useState({});

  const fetchRandomContact = async () => {
    try {
      const result = await contactApi.get(`?results=10`);
      const data = result.data;
      console.log(data);
      setRandomContact(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRandomContact();
  }, []);
  return (
    <div
      style={{
        width: 500,
        height: 500,
        margin: "auto",
        backgroundColor: "green",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button onClick={() => fetchRandomContact()}>Random contact</button>
      <img
        // src={randomContact.results.picture.thumbnail}
        alt=""
        style={{ maxHeight: 500, maxWidth: 500 }}
      />
    </div>
  );
};

export default Contact;
