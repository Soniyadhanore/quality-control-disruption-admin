import { Modal, Form } from "antd";
import TextArea from "antd/es/input/TextArea";
const CancelOrder = ({ isOpen, onOk, onCancel, ReasonText }) => {
  const [form] = Form.useForm();
  return (
    <>
      <Modal
        title={ReasonText}
        centered
        open={isOpen}
        onCancel={onCancel}
        onOk={onOk}
        width={440}
        okText="Submit"
        cancelText="Cancel"
      >
        <h2 className="text-sm font-normal mb-2">
          Please submit reason to cancel this order.
        </h2>
        <Form name="Cancel Order" layout="vertical" autoComplete="off">
          <Form.Item
            name="Cancellation Reason"
            label="Cancellation Reason"
            labelCol={{
              style: {
                color: "#222222",
                fontWeight: "600",
                fontSize: "14px",
                paddingBottom: "5px",
              },
            }} // Custom label style
          >
            <TextArea rows={3} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default CancelOrder;