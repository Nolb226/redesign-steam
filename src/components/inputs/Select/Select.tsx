import React from "react";
import ReactSelect, { Props } from "react-select";
import type {} from "react-select/base";

function Select(props: Props) {
  return (
    <ReactSelect
      {...props}
      classNamePrefix={"react-select"}
      isSearchable={false}
      styles={{
        control: (base, { isFocused }) => ({
          ...base,
          color: "white",
          backgroundColor: "#1E2329",

          border: "none",
          borderRadius: 3,
          ...(isFocused && {
            boxShadow: "0 0 0 1px white",
          }),
          padding: "4px 0",
        }),
        container: (base) => ({
          ...base,
          backgroundColor: "#1E2329",
        }),
        option: (base, { isSelected }) => ({
          ...base,
          color: "white",
          backgroundColor: "#1E2329",
          "&:hover": {
            backgroundColor: "#313843",
          },
          ...(isSelected && {
            backgroundColor: "#313843",
          }),
        }),
        singleValue: (base) => ({
          ...base,
          fontSize: 16,
          color: "white",
        }),
        indicatorSeparator: () => ({}),
        menu: (base) => ({
          ...base,
          backgroundColor: "#1E2329",
        }),
      }}
      // hideSelectedOptions
    />
  );
}

export default Select;
