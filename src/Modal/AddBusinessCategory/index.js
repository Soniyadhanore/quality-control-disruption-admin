import { Form, Input, Modal } from "antd";
const AddBusinessCategory = ({ isOpen, onOk, onCancel }) => {
  return (
    <>
      <Modal
        title="Add/Edit Business Category"
        centered
        open={isOpen}
        onCancel={onCancel}
        onOk={onOk}
        okText="Save"
      >
        <Form
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          style={{ marginTop: 24 }}
          autoComplete="off"
        >
          <Form.Item
            label="Business name (English)"
            name="Business name (English)"
            rules={[
              {
                required: true,
                message: "Please enter your Business name (English)",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            label="Business name (Arabic)"
            name="Business name (Arabic)"
            rules={[
              {
                required: true,
                message: "Please enter your Business name (Arabic)!",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default AddBusinessCategory;