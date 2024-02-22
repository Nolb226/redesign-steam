import React from "react";
import Panel from "../../../../components/Panel";
import InfoLabel from "../../../../components/InfoLabel";
import Button from "../../../../components/buttons/Button";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

function AccountSettings() {
  return (
    <>
      <Panel header="Profile">
        <Panel.Row>
          <div className="grid grid-cols-2">
            <InfoLabel title="Your account name">Account name</InfoLabel>
            <p className=" text-dim body-large">************</p>
          </div>
          <div className="">
            <p className="text-dim body-large">
              You can’t change your account name.
            </p>
          </div>
        </Panel.Row>
        <Panel.Row>
          <div className="grid grid-cols-2 ">
            <InfoLabel title="Your profile name">Profile name</InfoLabel>
            <p className="text-primary body-large">NTKH</p>
          </div>
          <div className="flex items-center gap-[10px]">
            <Button
              variant="secondary"
              to="../profile-settings"
              className="max-w-[166px] flex-1"
            >
              Edit Profile
            </Button>
            <Button variant="secondary" className="max-w-[166px] flex-1">
              Visit Profile
            </Button>
          </div>
        </Panel.Row>
      </Panel>
      <Panel header="Contact Info">
        <Panel.Row>
          <div className="grid w-full grid-cols-2">
            <InfoLabel title="Your email address">Email</InfoLabel>
            <p className="whitespace-nowrap text-primary body-large">
              *******@gmail.com{" "}
              <CheckCircleIcon className=" inline-block h-5 w-5 text-accent-green" />
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <Button variant="secondary" className="max-w-[166px] flex-1">
              Change Email
            </Button>
            <Button variant="secondary" className="max-w-[166px] flex-1">
              Email Preferences
            </Button>
          </div>
        </Panel.Row>
        <Panel.Row>
          <div className="grid w-full grid-cols-2">
            <InfoLabel title="Your phone number">Phone Number</InfoLabel>
            <p className="whitespace-nowrap text-primary body-large">
              Ends in **80
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <Button variant="secondary" className="max-w-[166px] flex-1">
              Change Number
            </Button>
            <Button variant="secondary" className="max-w-[166px] flex-1">
              Verify Number
            </Button>
            <Button
              variant="ghost"
              className="max-w-[166px] flex-1 hover:text-accent-red"
            >
              Remove Number
            </Button>
          </div>
        </Panel.Row>
      </Panel>
      <Panel header="VAC">
        <Panel.Row>
          <div className="grid w-full grid-cols-2">
            <InfoLabel title="Your account's status">Status</InfoLabel>
            <p className="whitespace-nowrap text-main body-large">
              No VAC Bans on this account
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <Button variant="secondary" className="max-w-[166px] flex-1">
              Learn More
            </Button>
          </div>
        </Panel.Row>
      </Panel>
      <Panel header="Danger Zone">
        <Panel.Row>
          <InfoLabel title="Delete your account from steam">
            Permanently Delete Your Account
          </InfoLabel>
          <div className="flex items-center gap-[10px]">
            <Button variant="secondary" className="max-w-[166px] flex-1">
              Learn More
            </Button>
            <Button
              variant="danger"
              className="max-w-[166px] flex-1 whitespace-nowrap"
            >
              Delete Account
            </Button>
          </div>
        </Panel.Row>
      </Panel>
    </>
  );
}

export default AccountSettings;
