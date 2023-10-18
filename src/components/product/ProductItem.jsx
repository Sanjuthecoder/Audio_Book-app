import { CheckOutlined } from "@ant-design/icons";
import { ImageLoader } from "@/components/common";
import { displayMoney } from "@/helpers/utils";
import PropType from "prop-types";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useHistory } from "react-router-dom";
import bannerImg from "@/images/6.png";

const ProductItem = ({ product, isItemOnBasket, addToBasket }) => {
  const history = useHistory();

  const onClickItem = (id) => {
    if (!product) return;
    // ------we have given a default prod id 1 hta dena later
    if ((product.id = id)) {
      history.push(`/product/${product.id}`);
    }
  };

  const itemOnBasket = isItemOnBasket ? isItemOnBasket(product.id) : false;

  const handleAddToBasket = () => {
    if (addToBasket)
      addToBasket({ ...product, selectedSize: product.sizes[0] });
  };

  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
      <div
        className={`product-card ${!product.id ? "product-loading" : ""}`}
        style={{
          border: product && itemOnBasket ? "1px solid #a6a5a5" : "",
          boxShadow:
            product && itemOnBasket ? "0 10px 15px rgba(0, 0, 0, .07)" : "none",
        }}>
        {itemOnBasket && (
          <CheckOutlined className="fa fa-check product-card-check" />
        )}
        <div
          className="product-card-content"
          onClick={onClickItem}
          role="presentation">
          <div className="product-card-img-wrapper">
            {
              //----we have added bannerimg hta dena baad me
              (product.image = { bannerImg } ? (
                <ImageLoader
                  alt={product.name}
                  className="product-card-img"
                  src={bannerImg}
                  //----product.image
                />
              ) : (
                <Skeleton width="100%" height="90%" />
              ))
            }
          </div>
          <div className="product-details">
            <h5 className="product-card-name text-overflow-ellipsis margin-auto">
              {(product.name = "Book" || <Skeleton width={80} />)}
            </h5>
            <p className="product-card-brand">
              {(product.brand = "Any" || <Skeleton width={60} />)}
            </p>
            <h4 className="product-card-price">
              {product.price ? (
                displayMoney((product.price = "10s"))
              ) : (
                <Skeleton width={40} />
              )}
            </h4>
          </div>
        </div>
        {product.id && (
          <button
            className={`product-card-button button-small button button-block ${
              itemOnBasket ? "button-border button-border-gray" : ""
            }`}
            onClick={handleAddToBasket}
            type="button">
            {itemOnBasket ? "Remove from basket" : "Add to basket"}
          </button>
        )}
      </div>
    </SkeletonTheme>
  );
};

ProductItem.defaultProps = {
  isItemOnBasket: undefined,
  addToBasket: undefined,
};

ProductItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  product: PropType.object.isRequired,
  isItemOnBasket: PropType.func,
  addToBasket: PropType.func,
};

export default ProductItem;
