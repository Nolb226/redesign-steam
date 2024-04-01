import React from "react";
import { CartItemProps } from "./CartItem.type";
import { TrashIcon } from "@heroicons/react/24/solid";
import useRedux from "../../../../hooks/useRedux";
import { removeFromCart } from "../../../../redux/auth";

function CartItem({ app }: CartItemProps) {
  const { dispatch } = useRedux();

  const handleRemoveApp = () => {
    dispatch(removeFromCart(app.id));
  };

  return (
    <div className="flex items-center justify-between rounded-[5px] bg-main px-[14px] pb-[18px] pt-[15px]">
      <div className="flex items-center justify-evenly gap-[25px]">
        <img src={app.header_image} alt="" className="w-40 rounded-[3px]" />
        <p className="heading-medium">{app.name}</p>
      </div>
      <div className="flex items-center gap-[86px]">
        <p className="heading-small">${app.price}</p>
        <button
          onClick={handleRemoveApp}
          className="flex rounded-[3px] bg-[#76808C]/10 p-2 hover:bg-[#76808c]/50"
        >
          <TrashIcon className="h-6 w-6 text-dim" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
