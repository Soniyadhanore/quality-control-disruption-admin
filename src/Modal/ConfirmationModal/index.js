import { Modal, Typography } from "antd";
const ConfirmationModal = ({
  isOpen,
  onOk,
  onCancel,
  ConfirmationHeading,
  ConfirmationParagraph,
}) => {
  return (
    <>
      <Modal
        title={ConfirmationHeading}
        centered
        open={isOpen}
        onCancel={onCancel}
        onOk={onOk}
        width={350}
      >
        <Typography className="text-sm mb-4">
          {ConfirmationParagraph}
        </Typography>
      </Modal>
    </>
  );
};
export default ConfirmationModal;
