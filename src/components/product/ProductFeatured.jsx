import { ImageLoader } from "@/components/common";
import PropType from "prop-types";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useHistory } from "react-router-dom";
import bannerImg from "@/images/6.png";
import bannerImg1 from "@/images/1.png";
import bannerImg2 from "@/images/book1.jpg";
import bannerImg3 from "@/images/images.png";
import bannerImg4 from "@/images/images.png";
import bannerImg5 from "@/images/1.png";
const dummy = [
  {
    id: "1",
    title: "Rd sharma",
    image: { bannerImg1 },
    total: "5",
  },
  {
    id: "2",
    title: "Rd sharma2",
    image: { bannerImg2 },
    total: "6",
  },
  {
    id: "3",
    title: "Rd sharma3",
    image: { bannerImg3 },
    total: "8",
  },
  {
    id: "4",
    title: "Rd sharma4",
    image: { bannerImg4 },
    total: "10",
  },
  {
    id: "5",
    title: "gj",
    image: { bannerImg5 },
    total: "7",
  },
  {
    id: "6",
    title: "nnin",
    image: { bannerImg5 },
    total: "7",
  },
];

const ProductFeatured = ({ product }) => {
  const history = useHistory();
  const onClickItem = () => {
    if (!product) return;

    history.push(`/product/${product.id}`);
  };

  return (
    <div class="product-display-grid">
      <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
        <div
          className="product-display"
          onClick={onClickItem}
          role="presentation">
          <div className="product-display-img">
            {
              (product.image = "bannerImg" ? (
                <ImageLoader className="product-card-img" src={bannerImg2} />
              ) : (
                <Skeleton width="100%" height="100%" />
              ))
            }
          </div>
          <div className="product-display-details">
            <h2>{(product.name = "Books Count" || <Skeleton width={80} />)}</h2>
            <p className="text-subtle text-italic">
              {(product.brand = "Total" || <Skeleton width={40} />)}
            </p>
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
};

ProductFeatured.propTypes = {
  product: PropType.shape({
    image: PropType.string,
    name: PropType.string,
    id: PropType.string,
    brand: PropType.string,
  }).isRequired,
};

export default ProductFeatured;
