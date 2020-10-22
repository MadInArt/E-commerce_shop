import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shopPage/shopPage-selector";
import CollectionPreview from "../collection-preview/collection-preview";
import "./collection-overview.scss";

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otheCollectionsProps }) => (
      <CollectionPreview key={id} {...otheCollectionsProps} />
    ))}
  </div>
);

const mapDispatchToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapDispatchToProps)(CollectionOverview);
