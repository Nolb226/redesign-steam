import React, { useCallback, useState } from "react";
import { LanguagesProps, SupportedLanguageProps } from "./Languages.type";
import { CheckIcon } from "@heroicons/react/24/solid";

const SupportedLanguage = ({ children, isAudio }: SupportedLanguageProps) => {
  return (
    <div className="flex items-center justify-between rounded-[3px] bg-highlight/[39] px-[13px] py-2">
      <span className="body-small">{children}</span>
      <div className="flex items-center justify-around  gap-12">
        <CheckIcon className="h-5 w-11 font-bold text-primary" />
        <div className="w-11"></div>
        {isAudio ? (
          <CheckIcon className="h-5 w-11 font-bold text-primary" />
        ) : (
          <div className="w-11"></div>
        )}
      </div>
    </div>
  );
};

function Languages({ languages, audio }: LanguagesProps) {
  const [isShowFull, setIsShowFull] = useState<boolean>(false);

  const handleShowFull = () => setIsShowFull(() => true);

  const renderSupportedLanguages = useCallback(() => {
    const displaySupportedLanguages = isShowFull
      ? languages
      : languages.slice(0, 5);

    return displaySupportedLanguages.map((language, i) => (
      <SupportedLanguage
        key={`language-${i}`}
        isAudio={language === audio?.[i]}
      >
        {language}
      </SupportedLanguage>
    ));
  }, [audio, languages, isShowFull]);

  return (
    <div className="rounded-[5px] bg-main p-[25px]">
      <p className="mb-[7px] text-dim body-large">Languages</p>
      <div className="flex">
        <div className="ml-auto flex gap-5">
          <span className="text-dim body-large">Interfaces</span>
          <span className="text-dim body-large">Subtitles</span>
          <span className="text-dim body-large ">Full Audio</span>
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-[7px] ">
        {renderSupportedLanguages()}
      </div>
      {!isShowFull && languages.length >= 6 && (
        <span
          onClick={handleShowFull}
          className="mt-2 text-primary body-small hover:cursor-pointer"
        >
          See all {languages.length} supported languages
        </span>
      )}
    </div>
  );
}

export default Languages;
