import React, { cloneElement, useState } from "react";
import { WishListProps } from "./WishList.type";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HearOutline } from "@heroicons/react/24/outline";
import { animated, useSpring, useTransition } from "@react-spring/web";
import clsx from "clsx";

function WishList({ children }: WishListProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const handleToggle = () => {
    setIsFavorite(() => !isFavorite);
  };

  const props = useSpring({ width: isFavorite ? 60 : children ? 130 : 60 });
  const heartProps = useSpring({
    transform: isFavorite ? "scale(1)" : "scale(0)",
  });

  return (
    <animated.button
      onClick={handleToggle}
      style={props}
      className={
        "flex items-center gap-[10px] rounded-[3px] bg-highlight px-5 py-[12.5px] " +
        clsx({
          "hover:bg-hover": !isFavorite,
          "hover:bg-accent-red": isFavorite,
        })
      }
    >
      {children && !isFavorite && <p className="body-large">{children}</p>}
      {isFavorite ? (
        <animated.div className="" style={heartProps}>
          <HeartIcon className=" h-5 w-5" />
        </animated.div>
      ) : (
        <HearOutline className="h-5 w-5" />
      )}
    </animated.button>
  );
}

export default WishList;
