import React, { useEffect, useState } from "react";
import contactApi from "../../../api/api";
import ContactCard from "./contactCard";

const Contact = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContact = async () => {
    try {
      const result = await contactApi.get(`?results=100`);
      const data = result.data;
      setContacts(data.results);
      //   console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(contacts);

  useEffect(() => {
    fetchContact();
  }, []);

  const randomContacts = () => {
    //preko filtera-uradi
  };

  return (
    <div>
      {contacts.map((contact, index) => {
        return (
          <ContactCard
            key={index}
            img={contact.picture.large}
            name={contact.name.first}
            email={contact.email}
            age={contact.dob.age}
          />
        );
      })}
    </div>
  );
};

export default Contact;
