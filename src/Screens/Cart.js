import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const addState = useSelector((state) => state.add);
  return (
    <div>
      {addState.addCart?.map((item, idx) => {
        return (
          <div key={idx}>
            <ul>
              <li>{item?.title}</li>
              <img src={item?.image} />
              <hr />
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
