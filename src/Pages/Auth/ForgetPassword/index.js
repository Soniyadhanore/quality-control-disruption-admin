import {
  Typography,
  Button,
  Input,
  Form,
  Layout,
  Card,
  Flex,
} from "antd";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;
const ForgotPassword = () => {
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
            <Title level={3} align={'center'}>Forgot Password</Title>
            <div className="text-[15px] font-normal">Enter registered email address to receive reset password link</div> 
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
                label="Email Address"
                name="Email"
                rules={[
                  {
                    required: true,
                    message: "Enter the registered email address to receive the reset password link.",
                  },
                ]}
              >
                <Input size="large"/>
              </Form.Item>
             
              <div className="flex gap-4">
              <Button
                className="w-full mt-4"
                size="large"
                type="primary outline-btn"
                htmlType="submit"
                onClick={() => navigate("/")}
              >
                Back
              </Button>
              <Button
                className="w-full mt-4"
                size="large"
                type="primary"
                htmlType="submit"
              >
                Send Link
              </Button>
              </div>
            </Form>
          </Card>
        </Flex>
      </Layout>
    </>
  );
};

export default ForgotPassword;
