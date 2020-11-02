import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoaded } from "../../redux/shopPage/shopPage-selector";
import LoadingSpinner from "../../components/loading_spinner/loading_spinner";
import CollectionPage from "./CollectionPage";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  LoadingSpinner
)(CollectionPage);

export default CollectionPageContainer;
