import React from "react";
import Price from "../Price";
import { MainCTAProps } from "./MainCTA.type";
import Button from "../buttons/Button";

function MainCTA({ price }: MainCTAProps) {
  return (
    <div className="flex justify-between">
      <div className=""></div>
      <div className="flex gap-3">
        <Price price={price} />
        <Button
          className="body-large
         "
          variant="primary"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default MainCTA;
