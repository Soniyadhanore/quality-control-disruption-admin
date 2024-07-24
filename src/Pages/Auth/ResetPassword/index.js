import React from "react";
import { Typography, Input, Form, Layout, Card, Flex, Button } from "antd";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;
const ResetPassword = () => {
  const navigate = useNavigate();

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
              width={170}
              src="logo.svg"
              alt=""
              className="mx-auto absolute top-[-70px] left-0 right-0"
            />
            <Title level={3} align={"center"}>
              Reset Password
            </Title>
            <Form
              name="login"
              layout="vertical"
              style={{
                maxWidth: 400,
                minWidth: 400,
                marginTop: 24,
              }}
            >
              <Form.Item
                label="New Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please enter your new password.",
                  },
                ]}
              >
                <Input.Password
                  size="large"
                />
              </Form.Item>
              <Form.Item
                label="Confirm New Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message:
                      "New Password and confirm password does not match.",
                  },
                ]}
              >
                <Input.Password
                  size="large"
                />
              </Form.Item>

              <Button
                className="w-full mt-4"
                size="large"
                type="primary"
                htmlType="submit"
              >
                Change Password
              </Button>
            </Form>
          </Card>
        </Flex>
      </Layout>
    </>
  );
};

export default ResetPassword;

