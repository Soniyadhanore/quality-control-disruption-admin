import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Button, Flex } from "antd";
import AddSlot from "../../Modal/AddSlot";
import { EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const TimeSlot = () => {
  const navigate = useNavigate();
  const [isAddSlotModalOpen, setIsAddSlotModalOpen] = useState(false);
  const handleAddSlotOk = () => {
    setIsAddSlotModalOpen(false);
  };
  const handleAddSlotCancel = () => {
    setIsAddSlotModalOpen(false);
  };
  return (
    <div className="time-slot relative">
       <div className="text-right">
            <Button
              type="primary"
              size={14}
              icon={<EditOutlined />}
              className="mx-1.5 cursor-pointer"
              onClick={() => navigate("/edit-hours")}
            >
              Edit
            </Button>
          </div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: null,
        }}
      />
      <div className="absolute top-[24px] right-0 bg-green-300 text-white-A700 py-[5px] px-[9px] rounded font-semibold mt-3">Weekly View</div>
      <Flex gap="small" className="mt-4">
        <div className="w-full">
          <Flex vertical gap="small">
            <div
              className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500"
              onClick={() => setIsAddSlotModalOpen(true)}
            >
              02:00 PM - 04:00 PM
            </div>
            <div
              className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500"
              onClick={() => setIsAddSlotModalOpen(true)}
            >
              02:00 PM - 04:00 PM
            </div>
            <div
              className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500"
              onClick={() => setIsAddSlotModalOpen(true)}
            >
              02:00 PM - 04:00 PM
            </div>
            <Button
              className="py-3 h-auto text-sm"
              type="primary"
              onClick={() => setIsAddSlotModalOpen(true)}
            >
              Add Slot
            </Button>
          </Flex>
        </div>
        <div className="w-full">
          <Flex vertical gap="small">
            <div
              className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500"
              onClick={() => setIsAddSlotModalOpen(true)}
            >
              02:00 PM - 04:00 PM
            </div>
            <div
              className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500"
              onClick={() => setIsAddSlotModalOpen(true)}
            >
              02:00 PM - 04:00 PM
            </div>
            <div
              className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500"
              onClick={() => setIsAddSlotModalOpen(true)}
            >
              02:00 PM - 04:00 PM
            </div>
            <Button
              className="py-3 h-auto text-sm"
              type="primary"
              onClick={() => setIsAddSlotModalOpen(true)}
            >
              Add Slot
            </Button>
          </Flex>
        </div>
        <div className="w-full">
          <Flex vertical gap="small">
            <div
              className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500"
              onClick={() => setIsAddSlotModalOpen(true)}
            >
              02:00 PM - 04:00 PM
            </div>
            <div
              className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500"
              onClick={() => setIsAddSlotModalOpen(true)}
            >
              02:00 PM - 04:00 PM
            </div>
            <div
              className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500"
              onClick={() => setIsAddSlotModalOpen(true)}
            >
              02:00 PM - 04:00 PM
            </div>
            <Button
              className="py-3 h-auto text-sm"
              type="primary"
              onClick={() => setIsAddSlotModalOpen(true)}
            >
              Add Slot
            </Button>
          </Flex>
        </div>
        <div className="w-full">
          <Flex vertical gap="small">
            <div
              className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500"
              onClick={() => setIsAddSlotModalOpen(true)}
            >
              02:00 PM - 04:00 PM
            </div>
            <div
              className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500"
              onClick={() => setIsAddSlotModalOpen(true)}
            >
              02:00 PM - 04:00 PM
            </div>
            <div
              className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500"
              onClick={() => setIsAddSlotModalOpen(true)}
            >
              02:00 PM - 04:00 PM
            </div>
            <Button
              className="py-3 h-auto text-sm"
              type="primary"
              onClick={() => setIsAddSlotModalOpen(true)}
            >
              Add Slot
            </Button>
          </Flex>
        </div>
        <div className="w-full">
          <Flex vertical gap="small">
            <div
              className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500"
              onClick={() => setIsAddSlotModalOpen(true)}
            >
              02:00 PM - 04:00 PM
            </div>
            <div
              className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500"
              onClick={() => setIsAddSlotModalOpen(true)}
            >
              02:00 PM - 04:00 PM
            </div>
            <div
              className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500"
              onClick={() => setIsAddSlotModalOpen(true)}
            >
              02:00 PM - 04:00 PM
            </div>
            <Button
              className="py-3 h-auto text-sm"
              type="primary"
              onClick={() => setIsAddSlotModalOpen(true)}
            >
              Add Slot
            </Button>
          </Flex>
        </div>
        <div className="w-full">
          <Flex vertical gap="small">
            <div
              className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500"
              onClick={() => setIsAddSlotModalOpen(true)}
            >
              02:00 PM - 04:00 PM
            </div>
            <div
              className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500"
              onClick={() => setIsAddSlotModalOpen(true)}
            >
              02:00 PM - 04:00 PM
            </div>
            <div
              className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500"
              onClick={() => setIsAddSlotModalOpen(true)}
            >
              02:00 PM - 04:00 PM
            </div>
            <Button
              className="py-3 h-auto text-sm"
              type="primary"
              onClick={() => setIsAddSlotModalOpen(true)}
            >
              Add Slot
            </Button>
          </Flex>
        </div>
        <div className="w-full">
          <Flex vertical gap="small">
            <div
              className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500"
              onClick={() => setIsAddSlotModalOpen(true)}
            >
              02:00 PM - 04:00 PM
            </div>
            <div
              className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500"
              onClick={() => setIsAddSlotModalOpen(true)}
            >
              02:00 PM - 04:00 PM
            </div>
            <div
              className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500"
              onClick={() => setIsAddSlotModalOpen(true)}
            >
              02:00 PM - 04:00 PM
            </div>
            <Button
              className="py-3 h-auto text-sm"
              type="primary"
              onClick={() => setIsAddSlotModalOpen(true)}
            >
              Add Slot
            </Button>
          </Flex>
        </div>
      </Flex>
      <AddSlot
        isOpen={isAddSlotModalOpen}
        onOk={handleAddSlotOk}
        onCancel={handleAddSlotCancel}
      />
    </div>
  );
};
export default TimeSlot;