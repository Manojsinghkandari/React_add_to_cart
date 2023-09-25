import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "./redux/Feature/cartSlice";
import { add } from "./redux/Feature/addCartSlice";

const CartRedux = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <div>
      {cart?.map((item, idx) => {
        return (
          <ul key={idx}>
            <li>
              <h4>{item?.title}</h4>
            </li>
            <img src={item?.image} />
            <button
              onClick={() => {
                dispatch(add(item));
              }}
            >
              Add to Cart
            </button>
            <hr />
          </ul>
        );
      })}
    </div>
  );
};

export default CartRedux;
