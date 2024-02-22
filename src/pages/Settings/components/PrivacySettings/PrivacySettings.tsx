import React from "react";
import Panel from "../../../../components/Panel";
import InfoLabel from "../../../../components/InfoLabel";
import Select from "../../../../components/inputs/Select";

function PrivacySettings() {
  return (
    <Panel header="Profile Privacy">
      <Panel.Row>
        <div className="grid grid-cols-2">
          <InfoLabel title="Who can see your details ?">
            My basic details
          </InfoLabel>
          <div className="max-w-[190px]">
            <Select
              defaultValue={{ value: "1", label: "Public" }}
              options={[
                { value: "1", label: "Public" },
                { value: "2", label: "Private" },
                { value: "3", label: "Friends-Only" },
              ]}
            />
          </div>
        </div>
      </Panel.Row>
      <Panel.Row>
        <div className="mt-[10px] grid grid-cols-2">
          <InfoLabel title="Who can see your details ?">
            General Profile Privacy
          </InfoLabel>
          <div className="max-w-[190px]">
            <Select
              defaultValue={{ value: "1", label: "Public" }}
              options={[
                { value: "1", label: "Public" },
                { value: "2", label: "Private" },
                { value: "3", label: "Friends-Only" },
              ]}
            />
          </div>
        </div>
      </Panel.Row>
      <Panel.Row>
        <div className="mt-[10px] grid grid-cols-2">
          <InfoLabel title="Who can see your games progress ?" className="pl-9">
            Game details
          </InfoLabel>
          <div className="max-w-[190px]">
            <Select
              defaultValue={{ value: "1", label: "Public" }}
              options={[
                { value: "1", label: "Public" },
                { value: "2", label: "Private" },
                { value: "3", label: "Friends-Only" },
              ]}
            />
          </div>
        </div>
      </Panel.Row>
      <Panel.Row>
        <div className="mt-[10px] grid grid-cols-2">
          <InfoLabel title="Who can see your games progress ?" className="pl-9">
            Total Play Time
          </InfoLabel>
          <div className="max-w-[190px]">
            <Select
              value={{ value: "2", label: "Private" }}
              options={[
                { value: "1", label: "Public" },
                { value: "2", label: "Private" },
                { value: "3", label: "Friends-Only" },
              ]}
            />
          </div>
        </div>
      </Panel.Row>
      <Panel.Row>
        <div className="mt-[10px] grid grid-cols-2">
          <InfoLabel title="Who can see your games progress ?" className="pl-9">
            Friend List
          </InfoLabel>
          <div className="max-w-[190px]">
            <Select
              value={{ value: "3", label: "Friends-Only" }}
              options={[
                { value: "1", label: "Public" },
                { value: "2", label: "Private" },
                { value: "3", label: "Friends-Only" },
              ]}
            />
          </div>
        </div>
      </Panel.Row>
      <Panel.Row>
        <div className="mt-[10px] grid grid-cols-2">
          <InfoLabel title="Who can see your games progress ?" className="pl-9">
            Inventory
          </InfoLabel>
          <div className="max-w-[190px]">
            <Select
              defaultValue={{ value: "1", label: "Public" }}
              options={[
                { value: "1", label: "Public" },
                { value: "2", label: "Private" },
                { value: "3", label: "Friends-Only" },
              ]}
            />
          </div>
        </div>
      </Panel.Row>
      <Panel.Row>
        <div className="mt-[10px] grid grid-cols-2">
          <InfoLabel title="Who can see your games progress ?" className="pl-9">
            Profile Comments
          </InfoLabel>
          <div className="max-w-[190px]">
            <Select
              defaultValue={{ value: "1", label: "Public" }}
              options={[
                { value: "1", label: "Public" },
                { value: "2", label: "Private" },
                { value: "3", label: "Friends-Only" },
              ]}
            />
          </div>
        </div>
      </Panel.Row>
    </Panel>
  );
}

export default PrivacySettings;
