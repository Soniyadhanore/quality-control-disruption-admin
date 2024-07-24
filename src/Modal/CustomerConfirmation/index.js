import { Modal } from "antd";
const CustomerConfirmation = ({ isOpen, onOk, onCancel, ReasonText }) => {
  //const [rejectReason, setRejectReason] = useState("");
  return (
    <>
      <Modal
        title={ReasonText}
        centered
        open={isOpen}
        onCancel={onCancel}
        onOk={onOk}
        width={400}
        okText="Yes"
        cancelText="No"
      >
        <h2 className="text-sm font-normal mb-5">
          You want to send the order detail to customer.
        </h2>
      </Modal>
    </>
  );
};
export default CustomerConfirmation;