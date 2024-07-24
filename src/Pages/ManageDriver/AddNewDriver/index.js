import { Button, Card, Typography, Divider, Tabs } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import WorkingHours from "../../../Components/WorkingHours";
import Holidays from "../../../Components/Holidays";
import DriverPersonalDetails from "./AddNewDriverTabs/DriverPersonalDetails";
const AddNewDriver = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card>
        <div className="">
          <Typography className="text-xl font-semibold" align={"left"}>
            <LeftOutlined className="mr-2" onClick={() => navigate(-1)} />
            Add New Driver
          </Typography>
          <p className="ml-[26px]">
            Create a brand new user and add them to the site
          </p>
        </div>
        <Divider />
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab={"Personal details"} key={1}>
            <DriverPersonalDetails />
          </Tabs.TabPane>
          <Tabs.TabPane tab={"Working hours"} key={2}>
            <WorkingHours />
          </Tabs.TabPane>
          <Tabs.TabPane tab={"Holidays"} key={3}>
            <Holidays />
          </Tabs.TabPane>
        </Tabs>
        <Divider />
       
      </Card>
    </>
  );
};
export default AddNewDriver;