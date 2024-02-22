export type FeaturesProps = {};
export type FeatureProps = {
  icon: HeroIcon;
  to: string;
  children: string;
};

// type HeroIcon = (props: React.ComponentProps<"svg">) => JSX.Element;
// interface HeroIcon extends React.ComponentPropsWithoutRef<"svg"> {}
type HeroIcon = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> &
    React.RefAttributes<SVGSVGElement>
>;
