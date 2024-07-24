import { Card, Typography, Tabs, Divider, Button } from "antd";
import { useNavigate } from "react-router-dom";
import TabPane from "antd/es/tabs/TabPane";
import Holidays from "../../Components/Holidays";
import TimeSlot from "../../Components/TimeSlot";
import { EditOutlined } from "@ant-design/icons";
const TimeslotsHolidays = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card className="h-[100vh]">
        <div className="flex justify-between mb-4 gap-5">
          <div className="">
            <Typography className="text-xl font-semibold" align={"left"}>
              Timeslots & Holidays
            </Typography>
          </div>
         
        </div>
        <Divider />
        <Tabs tabPosition="left" style={{ height: "150px" }}>
          <TabPane tab="Time Slots" key="1">
            <TimeSlot />
          </TabPane>
          <TabPane tab="Holidays" key="2">
            <Holidays />
          </TabPane>
        </Tabs>
      </Card>
    </>
  );
};
export default TimeslotsHolidays;