import { Tabs } from "antd";
import BranchesDetails from "./VendorInformationTabs/BranchesDetails";
import VendorPersonalDetails from "./VendorInformationTabs/VendorPersonalDetails";
import PayoutDetails from "./VendorInformationTabs/PayoutDetails";
const VendorInformation = () => {
  return (
    <>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab={"Personal details"} key={1}>
          <VendorPersonalDetails />
        </Tabs.TabPane>
        <Tabs.TabPane tab={"Branches details"} key={2}>
          <BranchesDetails />
        </Tabs.TabPane>
        <Tabs.TabPane tab={"Payout details"} key={3}>
          <PayoutDetails />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};
export default VendorInformation;