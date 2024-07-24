import { Button, Card, Typography, Divider, Form, Switch } from "antd";
import { Input } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const AddZone = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card>
        <Typography className="text-xl font-semibold" align={"left"}>
          <LeftOutlined className="mr-2" onClick={() => navigate(-1)} />
          Add/Edit Zone
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
              label="Zone Name (English)"
              name="Zone Name (English)"
              rules={[
                {
                  required: true,
                  message: "Please enter your Zone Name (English).",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              name="Status"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter your Status.",
                },
              ]}
            >
              <div className="flex">
                  <p className="text-sm">Status</p>
                  <Switch defaultChecked className="ml-[50px]" />
                </div>
            </Form.Item>
            <Card>
              <Form.Item
                label="Type"
                name="Type"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter your Type.",
                  },
                ]}
              >
                <div className="flex gap-5 mb-4">
                  <p className="text-sm">Fastest Delivery</p>
                  <Switch defaultChecked className="ml-[50px]" />
                </div>
                <div className="flex gap-5">
                  <p className="text-sm">Scheduled Delivery</p>
                  <Switch className="ml-7" />
                </div>
              </Form.Item>
              <Button>Add</Button>
            </Card>
            <Form.Item>
              <div className="responsive-map-container mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1737.6221882978507!2d-98.48650795000005!3d29.421653200000023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c58aa57e6a56f%3A0xf08a9ad66f03e879!2sHenry+B.+Gonzalez+Convention+Center!5e0!3m2!1sen!2sus!4v1393884854786"
                  width={600}
                  height={450}
                  style={{ border: 0 }}
                />
              </div>
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
export default AddZone;