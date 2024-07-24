import { Button, Card, Typography, Divider, Form, Switch } from "antd";
import { Input } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import TextArea from "antd/es/input/TextArea";
const AddDropZone = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card>
        <Typography className="text-xl font-semibold" align={"left"}>
          <LeftOutlined className="mr-2" onClick={() => navigate(-1)} />
          Add/Edit Drop Zone
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
              label="Drop zone Name (English)"
              name="Drop zone Name (English)"
              rules={[
                {
                  required: true,
                  message: "Please enter your Drop zone Name (English).",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="Drop zone Name (Arabic)"
              name="Drop zone Name (Arabic)"
              rules={[
                {
                  required: true,
                  message: "Please enter your Drop zone Name (Arabic).",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="Address"
              name="Address"
              rules={[
                {
                  required: true,
                  message: "Please enter your Address.",
                },
              ]}
            >
              <div className="responsive-map-container mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1737.6221882978507!2d-98.48650795000005!3d29.421653200000023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c58aa57e6a56f%3A0xf08a9ad66f03e879!2sHenry+B.+Gonzalez+Convention+Center!5e0!3m2!1sen!2sus!4v1393884854786"
                  width={600}
                  height={450}
                  style={{ border: 0 }}
                />
              </div>
            </Form.Item>
            <Form.Item
              label="Discount %"
              name="Discount %"
              rules={[
                {
                  required: true,
                  message: "Please enter your Discount %.",
                },
              ]}
            >
              <Input size="large" suffix="%" />
            </Form.Item>
            <Form.Item
              label="Description (English)"
              name="Description (English)"
              rules={[
                {
                  required: true,
                  message: "Please enter your Description (English).",
                },
              ]}
            >
              <TextArea size="large" />
            </Form.Item>
            <Form.Item
              label=" Description (Arabic)"
              name=" Description (Arabic)"
              rules={[
                {
                  required: true,
                  message: "Please enter your  Description (Arabic).",
                },
              ]}
            >
              <TextArea size="large" />
            </Form.Item>
            <Form.Item
              label="Show in store"
              name="Show in store"
              rules={[
                {
                  type: "email",
                  message: "Please enter your Show in store.",
                },
              ]}
            >
              <Switch />
            </Form.Item>
            <Form.Item
              label="Length"
              name="Length"
              rules={[
                {
                  required: true,
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
export default AddDropZone;