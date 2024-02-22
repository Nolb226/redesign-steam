import React from "react";
import { FeatureProps, FeaturesProps } from "./Features.type";
import {
  CloudIcon,
  CursorArrowRippleIcon,
  StarIcon,
  UserIcon,
  UsersIcon,
  ViewColumnsIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const features = [
  {
    label: "Single Player",
    icon: UserIcon,
    to: "#",
  },
  {
    label: "Online Co-Op",
    icon: UsersIcon,
    to: "#",
  },
  {
    label: "Steam Achievement",
    icon: StarIcon,
    to: "#",
  },
  {
    label: "Full Controller Support",
    icon: CursorArrowRippleIcon,
    to: "#",
  },
  {
    label: "Steam Trading Cards",
    icon: ViewColumnsIcon,
    to: "#",
  },
  {
    label: "Steam Cloud",
    icon: CloudIcon,
    to: "#",
  },
];

const Feature = ({ children, icon: Icon, to }: FeatureProps) => {
  return (
    <Link
      to={to}
      className="flex items-center gap-[10px] rounded-[3px] bg-highlight/[39] px-[13px] py-2 hover:bg-hover"
    >
      <Icon className="h-5 w-5 text-primary" />
      <p className="text-primary body-small">{children}</p>
    </Link>
  );
};

function Features({}: FeaturesProps) {
  return (
    <div className="rounded-[5px] bg-main p-[25px]">
      <p className="text-dim body-large">Features</p>
      <div className="mt-4 flex flex-col gap-2">
        {features.map((feature) => (
          <Feature icon={feature.icon} to={feature.to}>
            {feature.label}
          </Feature>
        ))}
      </div>
    </div>
  );
}

export default Features;
