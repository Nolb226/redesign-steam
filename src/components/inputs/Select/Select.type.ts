export type SelectProps = {
  options: IOption[];
};

export type SelectContextProps = {
  selected?: IOption;
  onChange?: (option: IOption) => void;
};

export type OptionProps = {
  value: string;
  children: string;
  selected?: boolean;
};

export type IOption = {
  value: string;
  label: string;
};
