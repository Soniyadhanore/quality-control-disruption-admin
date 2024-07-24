import { Button, Card, Typography, Divider, Form, Switch, Tooltip } from "antd";
import { Input } from "antd";
import { LeftOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const selectDeliveryType = [
  {
    value: "1",
    label: "Fastest time",
  },
  {
    value: "2",
    label: "Scheduled time",
  },
];
const AddPackagingType = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card>
        <Typography className="text-xl font-semibold" align={"left"}>
          <LeftOutlined className="mr-2" onClick={() => navigate(-1)} />
          Add/Edit Packaging Type
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
              label="Name"
              name="Name"
              rules={[
                {
                  required: true,
                  message: "Please enter your Name.",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="Status"
              name="Status"
              rules={[
                {
                  type: "number",
                  message: "Please enter your Status.",
                },
              ]}
            >
              <Switch />{" "}
              <Tooltip title="This will allow the admin to assign it to a driver if enabled">
                <InfoCircleOutlined className="ml-4" />
              </Tooltip>
            </Form.Item>
            <Form.Item
              label="Length"
              name="Length"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter your Length.",
                },
              ]}
            >
              <Input size="large" suffix="CM" />
            </Form.Item>
            <Form.Item
              label="Width"
              name="Width"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter your Width.",
                },
              ]}
            >
              <Input size="large" suffix="CM" />
            </Form.Item>
            <Form.Item
              label="Height"
              name="Height"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter your Height.",
                },
              ]}
            >
              <Input size="large" suffix="CM" />
            </Form.Item>
          </Form>
        </div>
        <Divider />
        <div className="flex justify-end gap-3">
          <Button>Cancel</Button>
          <Button type="primary">Save</Button>
        </div>
      </Card>
    </>
  );
};
export default AddPackagingType;