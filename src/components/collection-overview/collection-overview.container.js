import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shopPage/shopPage-selector";
import LoadingSpinner from "../loading_spinner/loading_spinner";
import CollectionOverview from "./collection-overview";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  LoadingSpinner
)(CollectionOverview);

export default CollectionsOverviewContainer;
