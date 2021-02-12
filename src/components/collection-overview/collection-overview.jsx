import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shopPage/shopPage-selector";
import CollectionPreview from "../collection-preview/collection-preview";
import { CollectionOverviewContainer } from "./collection-overview.styles";

export const CollectionOverview = ({
  collections,
}) => {
  return (
    <CollectionOverviewContainer>
      {collections.map(({ id, ...otheCollectionsProps }) => (
        <CollectionPreview
          key={id}
          {...otheCollectionsProps}
        />
      ))}
    </CollectionOverviewContainer>
  );
};

const mapDispatchToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapDispatchToProps)(CollectionOverview);
