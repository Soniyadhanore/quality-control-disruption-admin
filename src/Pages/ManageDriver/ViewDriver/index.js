import { Card, Divider, Typography, Row, Col, Button } from "antd";
import { LeftOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ConvertToVendor from "../../../Modal/ConvertToVendor";
import TimeSlot from "../../../Components/TimeSlot";
const ViewDriver = () => {
  const navigate = useNavigate();
  const [isConvertToVendorModalOpen, setIsConvertToVendorModalOpen] =
    useState(false);
  const handleConvertToVendorOk = () => {
    setIsConvertToVendorModalOpen(false);
  };
  const handleConvertToVendorCancel = () => {
    setIsConvertToVendorModalOpen(false);
  };
  return (
    <>
      <Card>
        <Typography className="text-xl font-semibold" align={"left"}>
          <LeftOutlined className="mr-2" onClick={() => navigate(-1)} />
          View Driver
        </Typography>
        <Divider />
        <div>
          <Row>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Driver name</div>
                <div className="text-sm">John Smith</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Mobile number</div>
                <div className="text-sm">+19876543219</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Email address</div>
                <div className="text-sm">johnsmith12@gmail.com</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Zone</div>
                <div className="text-sm">Riyadh</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Vehicle Type</div>
                <div className="text-sm">Truck</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Image</div>
                <div className="text-sm">
                  <img
                    src="images/1.png"
                    alt="User"
                    className="w-[50px] h-[50px] rounded"
                  />
                </div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Plate Number</div>
                <div className="text-sm">UK123</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Price/KM</div>
                <div className="text-sm">SAR 40/KM</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Price upto X KM</div>
                <div className="text-sm">10KM</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Latest Location</div>
                <div className="text-sm"></div>
              </div>
            </Col>
            <Col span={24}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Driver Holidays</div>
                <div className="flex flex-col gap-4 mt-3">
                  <Row gutter={16}>
                    <Col span={10}>
                      <Card>
                        <div className="flex justify-between items-center">
                          <div className="font-semibold text-base">
                            Wed, 3 Jul 2024 - Wed, 3 Jul 2024
                          </div>
                        </div>
                      </Card>
                    </Col>
                    <Col span={10}>
                      <Card>
                        <div className="flex justify-between items-center">
                          <div className="font-semibold text-base">
                            Wed, 3 Jul 2024 - Wed, 3 Jul 2024
                          </div>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>

            <Col span={24}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">
                  Driver Working days{" "}
                </div>
                <div className="text-sm"></div>
              </div>
              <TimeSlot />
            </Col>
          </Row>
        </div>
      </Card>
      <ConvertToVendor
        isOpen={isConvertToVendorModalOpen}
        onOk={handleConvertToVendorOk}
        onCancel={handleConvertToVendorCancel}
      />
    </>
  );
};
export default ViewDriver;
