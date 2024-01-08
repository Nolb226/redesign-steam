export type PanelProps = {
  header: string;
  children: JSX.Element[] | JSX.Element;
};

export type PanelRowProps = {
  children: JSX.Element[] | JSX.Element;
  fullWidth?: boolean;
};
