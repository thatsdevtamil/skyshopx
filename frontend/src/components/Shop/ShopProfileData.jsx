import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllProductsShop } from "../../redux/actions/product";
import styles from "../../styles/styles";
import ProductCard from "../Route/ProductCard/ProductCard";
import { productData } from "../../static/data";

const ShopProfileData = ({ isOwner }) => {
  // Safely destructure products, and use an empty array as fallback
  const { products = [] } = useSelector((state) => state.product || {}); 
  const { id } = useParams();
  const dispatch = useDispatch();

  // Fetch shop products when the component mounts
  useEffect(() => {
    if (id) {
      dispatch(getAllProductsShop(id)); 
    }
  }, [dispatch, id]);

  const [active, setActive] = useState(1);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <div className="w-full flex">
          <div className="flex items-center" onClick={() => setActive(1)}>
            <h5
              className={`font-[600] text-[20px] ${
                active === 1 ? "text-red-500" : "text-[#333]"
              } cursor-pointer pr-[20px]`}
            >
              Shop Products
            </h5>
          </div>
          <div className="flex items-center" onClick={() => setActive(2)}>
            <h5
              className={`font-[600] text-[20px] ${
                active === 2 ? "text-red-500" : "text-[#333]"
              } cursor-pointer pr-[20px]`}
            >
              Running Events
            </h5>
          </div>
          <div className="flex items-center" onClick={() => setActive(3)}>
            <h5
              className={`font-[600] text-[20px] ${
                active === 3 ? "text-red-500" : "text-[#333]"
              } cursor-pointer pr-[20px]`}
            >
              Shop Reviews
            </h5>
          </div>
        </div>
        <div>
          {isOwner && (
            <div>
              <Link to="/dashboard">
                <div className={`${styles.button} !rounded-[4px] h-[42px]`}>
                  <span className="text-[#fff]">Go Dashboard</span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>

      <br />
      {/* Render products if they exist */}
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0">
        {/* {products.length > 0 ? (
          products.map((product, index) => (
            <ProductCard data={product} key={index} isShop={true} />
          ))
        ) : (
          <h5 className="w-full text-center py-5 text-[18px]">
            No products available for this shop!
          </h5>
        )} */}

        {
          productData &&
          productData.map((i,index) => (
            <ProductCard data={i} key={index} isShop={true}/>
          ))
        }
      </div>
    </div>
  );
};

export default ShopProfileData;
