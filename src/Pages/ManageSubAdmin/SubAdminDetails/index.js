import { Card, Divider, Typography, Row, Col, Button } from "antd";
import {
  LeftOutlined,
  EditOutlined,
  LockOutlined,
  DeleteOutlined,
  RedoOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const SubAdminDetails = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card>
        <div className="flex justify-between mb-4 gap-5">
          <div className="">
            <Typography className="text-xl font-semibold" align={"left"}>
              <LeftOutlined className="mr-2" onClick={() => navigate(-1)} />
              Sub Admin Details
            </Typography>
          </div>
          <div>
            <Button
              size={14}
              icon={<LockOutlined />}
              className="mx-1.5 cursor-pointer inline-btn"
            >
              Resend Password link
            </Button>
            <Button
              size={14}
              icon={<EditOutlined />}
              className="mx-1.5 cursor-pointer inline-btn"
            >
              Edit
            </Button>
            <Button
              size={14}
              icon={<DeleteOutlined />}
              className="mx-1.5 cursor-pointer inline-btn"
            >
              Delete account
            </Button>
            <Button
              size={14}
              icon={<RedoOutlined />}
              className="mx-1.5 cursor-pointer inline-btn"
            >
              Update Status
            </Button>
          </div>
        </div>
        <Divider />
        <div>
          <Row>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Name</div>
                <div className="text-sm">John C. Delaughter</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Email Address </div>
                <div className="text-sm">jandanny@gmail.com </div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Mobile Number</div>
                <div className="text-sm">650-921-4476</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Role</div>
                <div className="text-sm">Employee </div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">
                  Account created on
                </div>
                <div className="text-sm">01/01/2024</div>
              </div>
            </Col>
            <Col span={10}>
              <div className="mr-4 my-5">
                <div className="font-semibold text-[17px]">Status</div>
                <div className="text-sm">Active</div>
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    </>
  );
};
export default SubAdminDetails;