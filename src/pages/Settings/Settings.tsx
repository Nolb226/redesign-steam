import React from "react";
import Search from "../../components/inputs/Search";
import Panel from "./components/Panel";
import InfoToolTip from "../../components/InfoToolTip";
import InfoLabel from "./components/InfoLabel";

function Settings() {
  return (
    <div className=" bg-highlight bg-gradient-to-b from-[#0E141B]/80 to-[#0E141B]/80 pb-[332px] pt-10">
      <div className="container mx-auto">
        <h1 className="heading-large">Settings</h1>
        <div className="mt-8 flex gap-4">
          <div className="flex-col gap-[10px] bg-main p-[15px]">
            <Search />
          </div>
          <div className="flex flex-1 flex-col gap-5">
            <Panel header="Profile">
              <InfoLabel title="Your account name">Account name</InfoLabel>
              <InfoLabel title="Your account name">Account name</InfoLabel>
            </Panel>
            <Panel header="Contact Info">
              <div className=""></div>
            </Panel>
            <Panel header="VAC">
              <div className=""></div>
            </Panel>
            <Panel header="Danger Zone">
              <div className=""></div>
            </Panel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
