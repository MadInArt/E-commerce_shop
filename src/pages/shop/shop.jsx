import React from "react";
import { Route } from "react-router-dom";

import "./shop.scss";
import CollectionOverview from "../../components/collection-overview/collection-overview";
import CollectionPage from "../category/categoryPage";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
