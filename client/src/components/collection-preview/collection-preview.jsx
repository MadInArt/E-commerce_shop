import React, { useState } from "react";
import algoliasearch from "algoliasearch";
import CollectionItem from "../collection-item/collection-item";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./collection-preview.styles";

export const CollectionPreview = ({ title, items }) => {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState();
  const searchClient = algoliasearch(
    "SOT11ZIHG7",
    "378b7dd7a965b56fe05a0fda8b3512a5"
  );
  const searchIndex = searchClient.initIndex("collections");

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };
  const handleSearch = async (queryText) => {
    try {
      const result = await searchIndex.search(queryText);
      setSearchResult(result.hits);
    } catch (error) {
      console.log(error);
      setSearchResult(null);
    }
  };
  return (
    <CollectionPreviewContainer>
      {/* <TitleContainer>{title.toUpperCase()}</TitleContainer> */}
      {/* <input
        type="text"
        onChange={handleSearchText}
        value={searchText}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch(searchText);
        }}
      /> */}
      <PreviewContainer>
        {searchResult && searchResult.length > 0
          ? items
              .filter((item, idx) => idx < 4)
              .map((item) => <CollectionItem key={item.id} item={item} />)
          : items
              .filter((item, idx) => idx < 4)
              .map((item) => <CollectionItem key={item.id} item={item} />)}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
