import { Modal } from "antd";
import VendorInformation from "../../Components/VendorInformation";
const ConvertToVendor = ({ isOpen, onOk, onCancel }) => {
  return (
    <>
      <Modal
        centered
        open={isOpen}
        onCancel={onCancel}
        onOk={onOk}
        okText="Save"
        width={1000}
        footer={null}
      >
        <VendorInformation />
      </Modal>
    </>
  );
};
export default ConvertToVendor;