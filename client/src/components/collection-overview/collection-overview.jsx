import React, { useState, useEffect } from "react";
import algoliasearch from "algoliasearch";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shopPage/shopPage-selector";
import CollectionPreview from "../collection-preview/collection-preview";
import { CollectionOverviewContainer } from "./collection-overview.styles";

export const CollectionOverview = ({
  collections,
  id,
  otheCollectionsProps,
}) => {
  // const [searchText, setSearchText] = useState("");
  // const [searchResult, setSearchResult] = useState([]);
  // const searchClient = algoliasearch(
  //   "SOT11ZIHG7",
  //   "378b7dd7a965b56fe05a0fda8b3512a5"
  // );

  // const searchIndex = searchClient.initIndex("collections");

  // const handleSearchText = (e) => {
  //   setSearchText(e.target.value);
  // };

  // const handleSearch = async (queryText) => {
  //   try {
  //     const result = await searchIndex.search(queryText);
  //     setSearchResult(result.hits);
  //     console.log(searchResult);
  //   } catch (error) {
  //     console.log(error);
  //     setSearchResult(null);
  //   }
  // };

  // useEffect(() => {
  //   if (!searchText) setSearchResult(null);
  // }, [searchText]);

  return (
    <CollectionOverviewContainer>
      {/* <input
        type="text"
        onChange={handleSearchText}
        value={searchText}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch(searchText);
        }}
      /> */}
      {collections.map(({ id, ...otheCollectionsProps }) => (
        <CollectionPreview
          key={id}
          // searchResult={searchResult}
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
