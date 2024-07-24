import { Button } from "antd";
import TimeSlot from "../TimeSlot";
const WorkingHours = () => {
  return (
    <div>
      <TimeSlot />
      <div className="flex justify-end gap-3 mt-[30px]">
        <Button>Cancel</Button>
        <Button type="primary">Save</Button>
      </div>
    </div>
  );
};
export default WorkingHours;
