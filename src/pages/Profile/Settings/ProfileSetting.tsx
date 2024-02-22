import React from "react";
import Panel from "../../../components/Panel";
import InfoLabel from "../../../components/InfoLabel";
import Input from "../../../components/inputs/Input";
import TextArea from "../../../components/inputs/TextArea";
import Select from "../../../components/inputs/Select";

function ProfileSetting() {
  return (
    <>
      <Panel header="General">
        <Panel.Row>
          <div className="grid grid-cols-2">
            <InfoLabel title="Your profile name">Profile name*</InfoLabel>
            <Input defaultValue="Khánh Hoàng" />
          </div>
        </Panel.Row>
        <Panel.Row>
          <div className="grid grid-cols-2">
            <InfoLabel title="Your profile name">Real name</InfoLabel>
            <Input placeholder="Your real name here..." />
          </div>
        </Panel.Row>
        <Panel.Row>
          <div className="grid grid-cols-2">
            <InfoLabel title="Your profile name">Username</InfoLabel>
            <Input defaultValue="NTKH" />
          </div>
          <div className="ml-10">
            <span className="text-dim">Available at</span>{" "}
            <a
              href="https://steamcommunity.com/id/NTKH3010/"
              className="text-primary underline-offset-1 hover:underline"
            >
              https://steamcommunity.com/id/NTKH3010/
            </a>
          </div>
        </Panel.Row>
        <Panel.Row fullWidth>
          <div className="grid flex-1 grid-cols-4 ">
            <InfoLabel title="Your profile name">Bio</InfoLabel>
            <TextArea
              placeholder="what's people will see when go to your profile"
              containerClassName="col-span-3"
            />
          </div>
        </Panel.Row>
      </Panel>
      <Panel header="Location">
        <Panel.Row>
          <div className="grid grid-cols-2">
            <InfoLabel title="Who can see where you come from?">
              Country
            </InfoLabel>
            <Select
              //   value={{ value: "3", label: "Friends-Only" }}
              options={[
                { value: "1", label: "Public" },
                { value: "2", label: "Private" },
                { value: "3", label: "Friends-Only" },
              ]}
            />
          </div>
        </Panel.Row>
      </Panel>
    </>
  );
}

export default ProfileSetting;
