import React from "react";
import "./collections-overview.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollection } from "../../redux//shop/shop.selector";
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...restOfProps }) => {
        return <CollectionPreview key={id} {...restOfProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollection,
});

export default connect(mapStateToProps)(CollectionsOverview);
