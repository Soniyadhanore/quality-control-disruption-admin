import { Form } from "antd";
import { Input } from "antd";
const BranchAddress = () => {
  return (
    <>
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
          label="Branch Name"
          name="Branch Name"
          rules={[
            {
              required: true,
              message: "Please enter your Branch Name.",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Branch Address"
          name="Branch Address"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter your Branch Address.",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Pick from maps"
          name="Pick from maps"
          rules={[
            {
              type: "email",
              message: "Please enter your Pick from maps.",
            },
          ]}
        >
          <div className="responsive-map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1737.6221882978507!2d-98.48650795000005!3d29.421653200000023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c58aa57e6a56f%3A0xf08a9ad66f03e879!2sHenry+B.+Gonzalez+Convention+Center!5e0!3m2!1sen!2sus!4v1393884854786"
              width={600}
              height={450}
              style={{ border: 0 }}
            />
          </div>
        </Form.Item>
      </Form>
    </>
  );
};
export default BranchAddress;
