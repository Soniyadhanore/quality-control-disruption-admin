import { Button, Card, Typography, Divider, Form } from "antd";
import { Input } from "antd";
const SystemSettings = () => {
  return (
    <>
      <Card>
        <Typography className="text-xl font-semibold" align={"left"}>
          Update setting Data
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
              label="Loading time for scheduled delivery"
              name="Loading time for scheduled delivery"
              rules={[
                {
                  required: true,
                  message:
                    "Please enter your Loading time for scheduled delivery.",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="Buffer time for fastest delivery"
              name="Buffer time for fastest delivery"
              rules={[
                {
                  required: true,
                  type: "email",
                  message:
                    "Please enter your Buffer time for fastest delivery.",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="Buffer time for scheduled delivery"
              name="Buffer time for scheduled delivery"
              rules={[
                {
                  required: true,
                  type: "number",
                  message:
                    "Please enter your Buffer time for scheduled delivery.",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="Delivery fees/KM for fastest delivery"
              name="Delivery fees/KM for fastest delivery"
              rules={[
                {
                  required: true,
                  type: "number",
                  message:
                    "Please enter your Delivery fees/KM for fastest delivery.",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="Delivery fees/KM for scheduled delivery"
              name="Delivery fees/KM for scheduled delivery"
              rules={[
                {
                  required: true,
                  type: "number",
                  message:
                    "Please enter your Delivery fees/KM for scheduled delivery.",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="Platform fees"
              name="Platform fees"
              rules={[
                {
                  required: true,
                  type: "number",
                  message: "Please enter your Platform fees.",
                },
              ]}
            >
              <Input size="large" />
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
export default SystemSettings;