import { Button, Card, Typography, Divider, Form, Select } from "antd";
import { Input } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
const selectRoles = [
  {
    value: "1",
    label: "Role 1 ",
  },
  {
    value: "2",
    label: "Role 2",
  },
];
const CreateSubAdmin = () => {
  const navigate = useNavigate();
  const [phoneNumberInput, setPhoneNumberInput] = useState();
  return (
    <>
      <Card>
        <Typography className="text-xl font-semibold" align={"left"}>
          <LeftOutlined
            onClick={() => navigate(-1)}
            className="text=lg text-black mr-2 cursor-pointer"
          />
          Add/Edit Sub Admin Account
        </Typography>
        <Divider />
        <div className="min-h-[calc(100vh_-_305px)]">
          <Form
            layout="vertical"
            style={{
              maxWidth: 600,
              width: "100%",
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <Form.Item
              label="First Name"
              name="First Name"
              rules={[
                {
                  required: true,
                  message: "Please enter your First Name.",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="Last Name"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter your Last Name.",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="Email Address"
              name="Email Address"
              rules={[
                {
                  required: true,
                  type: "number",
                  message: "Please enter your Email Address.",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="Mobile Number"
              name="Mobile Number"
              rules={[
                {
                  required: true,
                  type: "number",
                  message: "Please enter your Mobile Number.",
                },
              ]}
            >
              <PhoneInput
                className="border border-[#d9d9d9] rounded-lg	px-[11px] h-[40px]"
                international
                defaultCountry="RU"
                value={phoneNumberInput}
                onChange={setPhoneNumberInput}
              />
            </Form.Item>
            <Form.Item
              label="Role"
              name="Role"
              rules={[
                {
                  required: true,
                  type: "number",
                  message: "Please enter your Role.",
                },
              ]}
            >
              <Select size="large" placeholder="Select" options={selectRoles} />
            </Form.Item>
          </Form>
        </div>
        <Divider />
        <div className="flex justify-end gap-3">
          <Button>Cancel</Button>
          <Button type="primary">Create Account</Button>
        </div>
      </Card>
    </>
  );
};
export default CreateSubAdmin;