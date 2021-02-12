import React from "react";
import DocumentTitle from "react-document-title";

import Directory from "../../components/directory/directory";
import { HomePageContainer } from "./homepage.styles";

const HomePage = () => {
  return (
    <DocumentTitle title="GreenLand | Home">
      <HomePageContainer>
        <Directory />
      </HomePageContainer>
    </DocumentTitle>
  );
};

export default HomePage;
