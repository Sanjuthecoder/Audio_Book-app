import { ArrowRightOutlined } from "@ant-design/icons";
import { MessageDisplay } from "@/components/common";
import * as ROUTE from "@/constants/routes";
// -----for side bar
import { NavLink, useLocation } from "react-router-dom";
import { ProductShowcaseGrid } from "@/components/product";
import {
  FEATURED_PRODUCTS,
  RECOMMENDED_PRODUCTS,
  SHOP,
} from "@/constants/routes";
import {
  useDocumentTitle,
  useFeaturedProducts,
  useRecommendedProducts,
  useScrollTop,
} from "@/hooks";
import bannerImg from "@/images/banner-girl.png";
import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../SideBar";

const Home = () => {
  useDocumentTitle("Salinaka | Home");
  useScrollTop();

  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured,
  } = useFeaturedProducts(6);
  // const {
  //   recommendedProducts,
  //   fetchRecommendedProducts,
  //   isLoading: isLoadingRecommended,
  //   error: errorRecommended,
  // } = useRecommendedProducts(6);

  return (
    <main className="content">
      <SideBar />
      <div className="home">
        <div className="banner">
          <div className="banner-desc">
            <h1 className="text-thin">
              <strong>See</strong>
              &nbsp;everything with&nbsp;
              <strong>Clarity</strong>
            </h1>
            <p>
              Buying eyewear should leave you happy and good-looking, with money
              in your pocket. Glasses, sunglasses, and contacts—we’ve got your
              eyes covered.
            </p>
            <br />
            <Link to={SHOP} className="button">
              Shop Now &nbsp;
              <ArrowRightOutlined />
            </Link>
          </div>
          <div className="banner-img">
            <img src={bannerImg} alt="" />
          </div>
        </div>
        <div className="display">
          <div className="display-header">
            <h1>Dashboard</h1>
            {/* <Link to={FEATURED_PRODUCTS}>See All</Link> */}

            {/* <div className="product-card-img">
              <img src={bannerImg} alt="" />
            </div> */}

            {/* console.log("put the in frontend just to see the functionality, will
            remove later as we get backend"); */}
          </div>
          {/* {errorFeatured && !isLoadingFeatured ? (
            <MessageDisplay
              message={errorFeatured}
              action={fetchFeaturedProducts}
              buttonLabel="Try Again"
            />
          ) : */}
          {/* ------remved this ,, will remove the connections later------ */}
          <ProductShowcaseGrid products={featuredProducts} skeletonCount={6} />

          <div className="product-display-grid">
            <div class="css-vbgp86-SkeletonTheme"></div>
            <div class="product-display-img"></div>
          </div>
        </div>
        {/* <div className="display">
          <div className="display-header">
            <h1>Recommended Products</h1>
            <Link to={RECOMMENDED_PRODUCTS}>See All</Link>
          </div>
          {errorRecommended && !isLoadingRecommended ? (
            <MessageDisplay
              message={errorRecommended}
              action={fetchRecommendedProducts}
              buttonLabel="Try Again"
            />
          ) : (
            <ProductShowcaseGrid
              products={recommendedProducts}
              skeletonCount={6}
            />
          )}
        </div> */}
      </div>
    </main>
  );
};

export default Home;
