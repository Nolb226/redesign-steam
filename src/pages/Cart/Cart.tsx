import React, { useMemo } from "react";
import useRedux from "../../hooks/useRedux";
import CartItem from "./components/CartItem";
import { Helmet } from "react-helmet-async";
import { cleanCart } from "../../redux/auth";
import { TrashIcon } from "@heroicons/react/24/solid";

function Cart() {
  const { appSelector, dispatch } = useRedux();
  const { name, cart } = appSelector((state) => state.auth);

  const totalPrice = useMemo(
    () => cart.reduce((acc, item) => acc + item.price, 0),
    [cart],
  );
  const handleClearCart = () => dispatch(cleanCart());
  return (
    <>
      <Helmet>
        <title>Your Cart</title>
      </Helmet>
      <div className="min-h-screen pt-[62px]">
        <div className="container mx-auto">
          <h2 className="text-main heading-large">{name}'s Shopping Cart</h2>
          <div className="mt-11 grid grid-cols-10 gap-x-5">
            <div className="col-span-7">
              <div className="min-h-[300px]">
                {cart.map((item) => (
                  <CartItem app={item} />
                ))}
              </div>
              <div className="mt-3 bg-main py-8 pl-7 pr-3.5 heading-medium">
                <div className="flex justify-between">
                  <p>
                    Estimated Total<sup>1</sup>
                  </p>
                  <div className="flex items-center gap-[86px]">
                    <span>${totalPrice}</span>
                    <button
                      onClick={handleClearCart}
                      className="flex rounded-[3px] bg-[#76808C]/10 p-2 hover:bg-[#76808c]/50"
                    >
                      <TrashIcon className="h-6 w-6 text-accent-red" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-3"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
