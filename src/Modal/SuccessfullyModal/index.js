import { Modal, Result } from "antd";
import { useNavigate } from "react-router-dom";
const SuccessfullyModal = ({ isOpen, onOk, onCancel }) => {
  const navigate = useNavigate();
  return (
    <>
      <Modal
        centered
        open={isOpen}
        onCancel={onCancel}
        onOk={onOk}
        footer={null}
        okText={
          <>
            <span onClick={() => navigate("/")}>Login</span>
          </>
        }
      >
        <Result status="success" title="You've logged in successfully!" />
      </Modal>
    </>
  );
};
export default SuccessfullyModal;