import {
  Button,
  Card,
  Typography,
  Divider,
  Form,
  Checkbox,
  Row,
  Col,
} from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const EditSlot = () => {
  const navigate = useNavigate();
  const [selectedTimeSlots, setSelectedTimeSlots] = useState({});

  const handleTimeSlotClick = (day, timeSlot) => {
    setSelectedTimeSlots((prevTimeSlots) => ({
      ...prevTimeSlots,
      [day]: prevTimeSlots[day]
        ? [...prevTimeSlots[day], timeSlot]
        : [timeSlot],
    }));
  };
  return (
    <>
      <Card>
        <div className="">
          <Typography className="text-xl font-semibold" align={"left"}>
            <LeftOutlined className="mr-2" onClick={() => navigate(-1)} />
            Edit Slot
          </Typography>
        </div>
        <Divider />
        <div className="min-h-[calc(100vh_-_305px)]">
          <Form
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <Checkbox.Group className="w-full">
              <div className="font-semibold mr-[50px] w-[100px] mt-4">Sunday</div>
              <Row gutter={16}>
                <Col span={4}>
                  <div
                    className={`w-full rounded-lg py-3 px-1.5 text-center text-sm ${
                      selectedTimeSlots["02:00 PM - 04:00 PM"]
                        ? "bg-green-100 text-white"
                        : "bg-gray-100 text-gray-500"
                    } my-2`}
                    onClick={() => handleTimeSlotClick("02:00 PM - 04:00 PM")}
                  >
                    02:00 PM - 04:00 PM
                  </div>
                </Col>
                <Col span={4}>
                  <div
                    className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500 my-2"
                  >
                    02:00 PM - 04:00 PM
                  </div>
                </Col>
                <Col span={4}>
                  <div
                    className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500 my-2"
                  >
                    02:00 PM - 04:00 PM
                  </div>
                </Col>
                <Col span={4}>
                  <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500 my-2">
                    02:00 PM - 04:00 PM
                  </div>
                </Col>
              </Row>
              <Divider />

              <div className="font-semibold mr-[50px] w-[100px] mt-4">Monday</div>
              <Row gutter={16}>
                <Col span={4}>
                  <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500 my-2">
                    02:00 PM - 04:00 PM
                  </div>
                </Col>
                <Col span={4}>
                  <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500 my-2">
                    02:00 PM - 04:00 PM
                  </div>
                </Col>
                <Col span={4}>
                  <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500 my-2">
                    02:00 PM - 04:00 PM
                  </div>
                </Col>
              </Row>
              <Divider />

              <div className="font-semibold mr-[50px] w-[100px] mt-4">Tuesday</div>
              <Row gutter={16}>
                <Col span={4}>
                  <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500 my-2">
                    02:00 PM - 04:00 PM
                  </div>
                </Col>
              </Row>
              <Divider />

              <div className="font-semibold mr-[50px] w-[100px] mt-4">Wednesday</div>
              <Row gutter={16}>
                <Col span={4}>
                  <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500 my-2">
                    02:00 PM - 04:00 PM
                  </div>
                </Col>
                <Col span={4}>
                  <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500 my-2">
                    02:00 PM - 04:00 PM
                  </div>
                </Col>
                <Col span={4}>
                  <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500 my-2">
                    02:00 PM - 04:00 PM
                  </div>
                </Col>
                <Col span={4}>
                  <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500 my-2">
                    02:00 PM - 04:00 PM
                  </div>
                </Col>
              </Row>
              <Divider />

              <div className="font-semibold mr-[50px] w-[100px] mt-4">Thursday</div>
              <Row gutter={16}>
                <Col span={4}>
                  <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500 my-2">
                    02:00 PM - 04:00 PM
                  </div>
                </Col>
                <Col span={4}>
                  <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500 my-2">
                    02:00 PM - 04:00 PM
                  </div>
                </Col>
              </Row>
              <Divider />
              <div className="font-semibold mr-[50px] w-[100px] mt-4">Friday</div>
              <Row gutter={16}>
                <Col span={4}>
                  <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500 my-2">
                    02:00 PM - 04:00 PM
                  </div>
                </Col>
                <Col span={4}>
                  <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500 my-2">
                    02:00 PM - 04:00 PM
                  </div>
                </Col>
                <Col span={4}>
                  <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500 my-2">
                    02:00 PM - 04:00 PM
                  </div>
                </Col>
                <Col span={4}>
                  <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500 my-2">
                    02:00 PM - 04:00 PM
                  </div>
                </Col>
              </Row>
              <Divider />
              <div className="font-semibold mr-[50px] w-[100px] mt-4">Saturday</div>
              <Row gutter={16}>
                <Col span={4}>
                  <div className="w-full rounded-lg bg-gray-100 py-3 px-1.5 text-center text-sm text-gray-500 my-2">
                    02:00 PM - 04:00 PM
                  </div>
                </Col>
              </Row>
              <Divider />

              <Divider />
            </Checkbox.Group>
          </Form>
          <div className="flex justify-end gap-3">
            <Button>Cancel</Button>
            <Button type="primary">Save</Button>
          </div>
        </div>
      </Card>
    </>
  );
};
export default EditSlot;
