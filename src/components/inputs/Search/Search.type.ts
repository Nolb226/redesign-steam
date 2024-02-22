import React from "react";

// export type SearchProps = HTMLAttributes<HTMLInputElement> & {
//   onSearch?: (value?: string) => void;
// };

export interface SearchProps extends React.ComponentPropsWithoutRef<"input"> {
  onSearch?: (value?: string) => void;
}
