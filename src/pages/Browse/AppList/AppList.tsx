import React from "react";
import { IApp } from "../../../types/apps";
import AppListItem from "../AppListItem";

function AppList({ apps }: { apps: IApp[] }) {
  return (
    <>
      {apps.map((app: IApp) => (
        <AppListItem key={app.name} app={app} />
      ))}
    </>
  );
}

export default AppList;
