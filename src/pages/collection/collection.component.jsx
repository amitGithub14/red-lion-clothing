import React from "react";
import "./collection.styles.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ collection }) => {
  //const categoryID = match.params.categoryId;
  const { title, items } = collection;
  console.log(collection);
  return (
    <div className="collection-page">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
