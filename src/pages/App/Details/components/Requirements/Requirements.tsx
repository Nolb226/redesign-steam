import React, { useCallback, useState } from "react";
import { RequirementsProps, TSystems } from "./Requirements.type";
import SystemButton from "../SystemButton";

function Requirements({ systems, requirements }: RequirementsProps) {
  const [isViewing, setIsViewing] = useState<TSystems>(
    Object.keys(systems)[0] as TSystems,
  );

  const handleOnClick = (value: TSystems) => {
    setIsViewing(() => value);
  };

  const renderRequirements = useCallback(() => {
    return (
      <>
        <div
          className="mt-9 [&_li::marker]:text-dim [&_li]:font-normal [&_strong]:font-normal [&_strong]:text-dim  [&_strong]:body-large [&_ul]:ml-4 [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-4 "
          dangerouslySetInnerHTML={{
            __html: requirements[isViewing]?.minimum!,
          }}
        ></div>
        <div
          className="mt-9 [&_li::marker]:text-dim [&_li]:font-normal [&_strong]:font-normal [&_strong]:text-dim [&_strong]:body-large [&_ul]:ml-4 [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-4 "
          dangerouslySetInnerHTML={{
            __html: requirements[isViewing]?.recommended!,
          }}
        ></div>
      </>
    );
  }, [isViewing, requirements]);

  return (
    <div className="rounded bg-main/50 p-[28px]">
      <div className="flex items-center gap-7">
        <p className="text-dim heading-small">System requirements</p>
        <div className="flex items-center gap-5 ">
          {systems.windows && (
            <SystemButton
              currentSys={isViewing}
              system="windows"
              onClick={handleOnClick}
            >
              Window
            </SystemButton>
          )}
          {systems.mac && (
            <SystemButton
              currentSys={isViewing}
              system="mac"
              onClick={handleOnClick}
            >
              macOS
            </SystemButton>
          )}
          {systems.linux && (
            <SystemButton
              currentSys={isViewing}
              system="linux"
              onClick={handleOnClick}
            >
              Linux + SteamOS
            </SystemButton>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 transition-all duration-75 ease-in-out">
        {renderRequirements()}
      </div>
    </div>
  );
}

export default Requirements;
