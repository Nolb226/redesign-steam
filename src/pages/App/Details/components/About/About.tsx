import React, { useRef, useState } from "react";
import { AboutAppProps } from "./About.type";
import { animated, useSpring } from "@react-spring/web";

function About({ detail, name }: AboutAppProps) {
  const [isShowFull, setIsShowFull] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const props = useSpring({
    maxHeight: isShowFull ? `${ref.current!.clientHeight}px` : "850px",
    overflow: "hidden",
  });

  const handleOpenDetails = () => setIsShowFull(() => true);

  return (
    <div className=" rounded bg-main/50 p-7">
      <div className="relative">
        <p className="text-dim heading-small">About {name}</p>
        <animated.div style={props} className="mt-[30px]">
          <div
            ref={ref}
            dangerouslySetInnerHTML={{
              __html: detail,
            }}
            className={"-z-20 [&_h1]:heading-medium [&_h2]:bb_tag [&_ul]:bb_ul"}
          ></div>
        </animated.div>
        {!isShowFull && (
          <>
            <div className="absolute bottom-0 left-0 right-0 z-40 -mt-20 flex h-28 items-end rounded-[3px] bg-gradient-to-b from-transparent from-30% via-primary/25 via-[97%] to-black/40 to-[1%] "></div>
          </>
        )}
      </div>
      {!isShowFull && (
        <div className="text-right">
          <span
            onClick={handleOpenDetails}
            className="ml-auto text-dim body-medium  hover:cursor-pointer"
          >
            Show more
          </span>
        </div>
      )}
    </div>
  );
}

export default About;
