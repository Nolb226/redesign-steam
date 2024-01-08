import { PanelRowProps, PanelProps } from "./Panel.type";
import clsx from "clsx";

function Panel({ children, header }: PanelProps) {
  return (
    <div className="rounded-[3px] bg-main p-5">
      <h2 className="text-dim heading-medium">{header}</h2>
      <div className="mt-[35px] flex flex-col gap-[11px]">{children}</div>
    </div>
  );
}

function Row({ children, fullWidth = false }: PanelRowProps) {
  const rowClassName = clsx({
    flex: fullWidth,
    "grid grid-cols-2 items-center": !fullWidth,
  });
  return <div className={rowClassName}>{children}</div>;
}

Panel.Row = Row;

export default Panel;
