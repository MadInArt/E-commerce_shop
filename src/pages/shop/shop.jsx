import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import "./shop.scss";
import CollectionOverview from "../../components/collection-overview/collection-overview";
import CollectionPage from "../category/CollectionPage";
import { updateCollections } from "../../redux/shopPage/shopPage-action";
import LoadingSpinner from "../../components/loading_spinner/loading_spinner";
class ShopPage extends React.Component {
  state = {
    loading: true,
  };
  unsubscribeFromSnapshot = null;

  CollectionOverviewWithSpinner = LoadingSpinner(CollectionOverview);
  CollectionPageWithSpinner = LoadingSpinner(CollectionPage);

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }
  render() {
    const CollectionOverviewWithSpinner = LoadingSpinner(CollectionOverview);
    const CollectionPageWithSpinner = LoadingSpinner(CollectionPage);

    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
