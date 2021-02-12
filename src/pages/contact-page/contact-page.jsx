import React, { useState, memo } from "react";
import { firestore } from "../../firebase/firebase.utils";
import Swal from "sweetalert2";
import DocumentTitle from "react-document-title";
import {
  MainContainer,
  ContactData,
  EmailFields,
  FormContainer,
  FormInputContainer,
  TextAreaContainer,
  HeaderContainer,
  ButtonContainer,
} from "./contact-page.styles";

import CustomButton from "../../components/button/button";

const ContactPage = memo(() => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    if (email.length > 4 && message.length > 5) {
      firestore
        .collection("contactPage")
        .add({
          name: name,
          email: email,
          message: message,
        })
        .then(() => {
          setLoader(false);
          Swal.fire({
            text: "Your message has been sent",
            icon: "success",
            confirmButtonColor: "black",
          });
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });
    } else {
      Swal.fire({
        text: "Provide at least email and your message",
        icon: "error",
        confirmButtonColor: "black",
      });
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <DocumentTitle title="GreenLand | Contact">
    <MainContainer>
      <ContactData>
        <div>
          <HeaderContainer>Contact info</HeaderContainer>
          <p>Our contact phone: (+48) 111-111-111</p>
          <p>Hours of work: 9:00 - 17:00 from Monday till Friday</p>
          <p>Greenland Ltd.</p>
          <p>Warsaw, Poland</p>
        </div>
      </ContactData>
      <EmailFields>
        <HeaderContainer>E-mail us !</HeaderContainer>
        <div>
          <span>
            <p>Your opinion is really important for us.</p>
            <p>
              Please email to Greenland.customers@gmail.com, or just speak your
              mind below.
            </p>
            <p>We are respond within 4 hours.</p>
          </span>
        </div>
        <FormContainer onSubmit={handleSubmit}>
          <FormInputContainer
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormInputContainer
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextAreaContainer
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></TextAreaContainer>
          <ButtonContainer>
            <CustomButton type="submit">Send it</CustomButton>
          </ButtonContainer>
        </FormContainer>
      </EmailFields>
    </MainContainer>
    </DocumentTitle>
  );
});

export default ContactPage;
