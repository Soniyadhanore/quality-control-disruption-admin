import { Form, Input, Modal } from "antd";
const AddItemSensitivity = ({ isOpen, onOk, onCancel }) => {
  return (
    <>
      <Modal
        title="Add/Edit Item Sensitivity"
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
            label="Item Sensitivity Name (English)"
            name="Item Sensitivity Name (English)"
            rules={[
              {
                required: true,
                message: "Please enter your Item Sensitivity Name (English)",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            label="Item Sensitivity Name (Arabic)"
            name="Item Sensitivity Name (Arabic)"
            rules={[
              {
                required: true,
                message: "Please enter your Item Sensitivity Name (Arabic)!",
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
export default AddItemSensitivity;