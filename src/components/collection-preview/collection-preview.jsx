import React from "react";

import CollectionItem from '../collection-item/collection-item'
import "./collection-preview.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="model-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items.filter((item, idx) => idx <4).map(({id, ...itemsProps}) => (
        <CollectionItem key={id} {...itemsProps}/>
      ))}
    </div>
  </div>
);
export default CollectionPreview;
