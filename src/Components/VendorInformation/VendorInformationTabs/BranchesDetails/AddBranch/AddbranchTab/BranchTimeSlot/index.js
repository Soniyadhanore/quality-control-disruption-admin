import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Button, Flex } from "antd";
import { useNavigate } from "react-router-dom";

const BranchTimeSlot = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="text-right mb-4">
        <Button className="text-sm" type="primary"  onClick={() => navigate("/edit-slot")}>
          Edit
        </Button>
      </div>
      <div className="time-slot">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin]}
          initialView="timeGridWeek"
          headerToolbar={{
            left: "prev,next",
            center: "title",
            right: "timeGridWeek",
          }}
        />
        <Flex gap="small" className="mt-4">
          <div className="w-full">
            <Flex vertical gap="small">
              <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500">
                02:00 PM - 04:00 PM
              </div>
              <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500">
                02:00 PM - 04:00 PM
              </div>
              <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500">
                02:00 PM - 04:00 PM
              </div>
            </Flex>
          </div>
          <div className="w-full">
            <Flex vertical gap="small">
              <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500">
                02:00 PM - 04:00 PM
              </div>
              <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500">
                02:00 PM - 04:00 PM
              </div>
              <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500">
                02:00 PM - 04:00 PM
              </div>
            </Flex>
          </div>
          <div className="w-full">
            <Flex vertical gap="small">
              <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500">
                02:00 PM - 04:00 PM
              </div>
              <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500">
                02:00 PM - 04:00 PM
              </div>
              <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500">
                02:00 PM - 04:00 PM
              </div>
            </Flex>
          </div>
          <div className="w-full">
            <Flex vertical gap="small">
              <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500">
                02:00 PM - 04:00 PM
              </div>
              <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500">
                02:00 PM - 04:00 PM
              </div>
              <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500">
                02:00 PM - 04:00 PM
              </div>
            </Flex>
          </div>
          <div className="w-full">
            <Flex vertical gap="small">
              <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500">
                02:00 PM - 04:00 PM
              </div>
              <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500">
                02:00 PM - 04:00 PM
              </div>
              <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500">
                02:00 PM - 04:00 PM
              </div>
            </Flex>
          </div>
          <div className="w-full">
            <Flex vertical gap="small">
              <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500">
                02:00 PM - 04:00 PM
              </div>
              <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500">
                02:00 PM - 04:00 PM
              </div>
              <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500">
                02:00 PM - 04:00 PM
              </div>
            </Flex>
          </div>
          <div className="w-full">
            <Flex vertical gap="small">
              <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500">
                02:00 PM - 04:00 PM
              </div>
              <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500">
                02:00 PM - 04:00 PM
              </div>
              <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500">
                02:00 PM - 04:00 PM
              </div>
            </Flex>
          </div>
        </Flex>
      </div>
    </>
  );
};
export default BranchTimeSlot;
