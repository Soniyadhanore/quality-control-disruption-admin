import { Modal, Result } from "antd";
const WarningModal = ({ isOpen, onOk, onCancel }) => {
  return (
    <>
      <Modal
        title="Error Message"
        centered
        open={isOpen}
        onCancel={onCancel}
        onOk={onOk}
        footer={null}
      >
        <Result
          status="error"
          title="The username and password combination you entered is incorrect."
        />
      </Modal>
    </>
  );
};
export default WarningModal;