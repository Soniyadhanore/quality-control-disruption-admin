import { useState } from "react";
import {
  Typography,
  Button,
  Input,
  Form,
  Layout,
  Card,
  Flex,
  Checkbox,
} from "antd";
import SuccessfullyModal from "../../../Modal/SuccessfullyModal";
import WarningModal from "../../../Modal/WarningModal";
import { Link } from "react-router-dom";
const { Title } = Typography;
const Login = () => {
  const [isSuccessfullyModalOpen, setIsSuccessfullyModalOpen] = useState(false);
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false);
  const showSuccessfullyModal = () => {
    setIsSuccessfullyModalOpen(true);
  };
  const handleSuccessfullyOk = () => {
    setIsSuccessfullyModalOpen(false);
  };
  const handleSuccessfullyCancel = () => {
    setIsSuccessfullyModalOpen(false);
  };
  const showWarningModalModal = () => {
    setIsWarningModalOpen(true);
  };
  const handleWarningModalOk = () => {
    setIsWarningModalOpen(false);
  };
  const handleWarningModalCancel = () => {
    setIsWarningModalOpen(false);
  };
  return (
    <>
      <Layout>
        <Flex
          gap="middle"
          align="center"
          justify="center"
          vertical
          style={{ minHeight: "100vh" }}
        >
          <Card className="relative">
            <img
              width={54}
              src="logo.png"
              alt=""
              className="mx-auto absolute top-[-90px] left-0 right-0"
            />
            <Title level={3} align={"center"}>
              Admin Login
            </Title>
            <Form
              name="login"
              layout="vertical"
              style={{
                maxWidth: 400,
                minWidth: 400,
                marginTop: 24,
              }}
              initialValues={{
                remember: true,
              }}
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="E-mail"
                name="E-mail"
                rules={[
                  {
                    required: true,
                    message: "Please enter your E-mail.",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please enter your password.",
                  },
                ]}
              >
                <Input.Password size="large" />
              </Form.Item>
              <Form.Item>
                <div className="flex items-center justify-between">
                  <Checkbox>Remember me</Checkbox>
                    <Link to="/forgot-password">
                      <Button
                        className="p-0 font-semibold !text-[#176b53]"
                        type="link"
                      >
                        Forgot Password
                      </Button>
                    </Link>
                </div>
              </Form.Item>

              <Button
                className="w-full mt-4"
                size="large"
                type="primary"
                htmlType="submit"
                onClick={showSuccessfullyModal} //Success
                // onClick={showWarningModalModal} //Warning
              >
                Submit
              </Button>
            </Form>
          </Card>
        </Flex>
      </Layout>
      <SuccessfullyModal
        isOpen={isSuccessfullyModalOpen}
        onOk={handleSuccessfullyOk}
        onCancel={handleSuccessfullyCancel}
      />
      <WarningModal
        isOpen={isWarningModalOpen}
        onOk={handleWarningModalOk}
        onCancel={handleWarningModalCancel}
      />
    </>
  );
};
export default Login;
