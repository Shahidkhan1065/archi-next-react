import { Fragment, useState } from "react";
import Link from "next/link";
import { Col } from "react-bootstrap";
import ProductModal from "./elements/ProductModal";
import { ProductRating } from "../Product";

const ProductGridFour = ({ product }) => {
  const [modalShow, setModalShow] = useState(false);
  const [colorImage, setColorImage] = useState("");

  return (
    <Fragment>
      <Col lg={3} sm={6}>
        <div className="product-grid product-grid--style-two">
          <div className="product-grid__image">
            <a>
              <img
                // src={colorImage ? colorImage : product.thumbImage[0]}
                alt="product_img1"
              />
            </a>

            <div className="product-grid__action-box">
              <ul>
                <li>
                  <button>
                    <i className="icon-shuffle" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setModalShow(true)}
                    className="d-none d-lg-block"
                  >
                    <i className="icon-magnifier-add" />
                  </button>
                </li>
                <li>
                  <button>
                    <i className="icon-heart" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-grid__info text-center">
            <h6 className="product-title">
              <a>{product.name}</a>
            </h6>
            {/* <div className="product-price">
              {product.discount ? (
                <Fragment>
                  <span className="price">${discountedPrice}</span>
                  <del>${productPrice}</del>
                </Fragment>
              ) : (
                <span className="price">${productPrice}</span>
              )}
            </div> */}
            {/* <div className="rating-wrap">
              <ProductRating ratingValue={product.rating} />
              <span className="rating-num">({product.ratingCount})</span>
            </div> */}
            {/* <div className="add-to-cart">
              {product.affiliateLink ? (
                <a
                  href={product.affiliateLink}
                  target="_blank"
                  className="btn btn-fill-out btn-radius"
                >
                  <i className="icon-action-redo" /> Buy Now
                </a>
              ) : product.variation && product.variation.length >= 1 ? (
                <Link
                  href={`/shop/product-basic/[slug]?slug=${product.slug}`}
                  as={"/shop/product-basic/" + product.slug}
                >
                  <a className="btn btn-fill-out btn-radius">
                    <i className="icon-wrench" /> Select Options
                  </a>
                </Link>
              ) : product.stock && product.stock > 0 ? (
                <button
                  onClick={() => addToCart(product, addToast)}
                  disabled={
                    cartItem !== undefined &&
                    cartItem.quantity >= cartItem.stock
                  }
                  className={`btn btn-fill-out btn-radius ${
                    cartItem !== undefined ? "active" : ""
                  }`}
                >
                  <i className="icon-basket-loaded" /> Add To Cart
                </button>
              ) : (
                <button disabled className="btn btn-fill-out btn-radius">
                  <i className="icon-basket-loaded" /> Add To Cart
                </button>
              )}
            </div> */}
          </div>
        </div>
      </Col>
      {/* product modal */}
      {/* <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        product={product}
      /> */}
    </Fragment>
  );
};

export default ProductGridFour;
