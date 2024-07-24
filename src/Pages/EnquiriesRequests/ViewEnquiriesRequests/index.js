import { Card, Divider, Typography, Row, Col, Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ConvertToVendor from "../../../Modal/ConvertToVendor";
const ViewEnquiriesRequests = () => {
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
          Enquiries & Requests detail
        </Typography>
        <Divider />
        <div>
          <Row>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Business name</div>
                <div className="text-sm">Archies Gift</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Store name </div>
                <div className="text-sm">ABC store </div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">
                  Business category
                </div>
                <div className="text-sm">Plants</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">
                  Contact person first name
                </div>
                <div className="text-sm">John </div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">
                  Contact person last name
                </div>
                <div className="text-sm">Smith</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">
                  Contact Person Email
                </div>
                <div className="text-sm">john124@gmail.com</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">
                  Contact Person Phone
                </div>
                <div className="text-sm">+966-551192141</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">
                  Business Address
                </div>
                <div className="text-sm">
                  Building no. 2, 2, 134, Mechanic Nagar, Badi Bhamori, Indore,
                  Madhya Pradesh 452011, India
                </div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">
                  Additional Comments
                </div>
                <div className="text-sm">
                  For more info please contact as soon as possible. There is
                  some issue in logging in.
                </div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Total Branches</div>
                <div className="text-sm">10</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">
                  Commercial Registration number
                </div>
                <div className="text-sm">2345678</div>
              </div>
            </Col>
          </Row>
          <Divider />
          <div className="flex justify-end gap-3">
            <Button className="inline-btn">Mark as received</Button>
            <Button
              className="inline-btn"
              onClick={() => setIsConvertToVendorModalOpen(true)}
            >
              Convert to vendor
            </Button>
          </div>
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
export default ViewEnquiriesRequests;