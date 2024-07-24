import { Button, Card, Typography, Divider, Tabs } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import BranchAddress from "./AddbranchTab/BranchAddress";
import BranchTimeSlot from "./AddbranchTab/BranchTimeSlot";
import BranchHoliday from "./AddbranchTab/BranchHoliday";
const AddBranch = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card>
        <Typography className="text-xl font-semibold" align={"left"}>
          <LeftOutlined className="mr-2" onClick={() => navigate(-1)} />
          Add Branch
        </Typography>
        <Divider />
        <div className="min-h-[calc(100vh_-_305px)]">
        <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab={"Branch Address"} key={1}>
<BranchAddress/>
       </Tabs.TabPane>
        <Tabs.TabPane tab={"Time Slot"} key={2}>

<BranchTimeSlot/>
     </Tabs.TabPane>
        <Tabs.TabPane tab={"Holidays"} key={3}>
<BranchHoliday/>
      </Tabs.TabPane>
      </Tabs>
        </div>
        <Divider />
        <div className="flex justify-end gap-3">
          <Button>Cancel</Button>
          <Button type="primary">Save</Button>
        </div>
      </Card>
    </>
  );
};
export default AddBranch;