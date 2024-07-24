import { Button, Col, DatePicker, Form, Input, Modal, Row } from "antd";
const AddSlot = ({ isOpen, onOk, onCancel }) => {
  return (
    <>
      <Modal
        title="Add/Edit Slot"
        centered
        open={isOpen}
        onCancel={onCancel}
        footer={
          <Row style={{ width: "100%" }}>
            <Col span={12} style={{ textAlign: "left" }}>
              {/* Delete will only show when the time slot is edited. */}
              <div className="text-red-700 font-semibold text-base mt-1 cursor-pointer">
                Delete
              </div>
            </Col>
            <Col span={12} style={{ textAlign: "right" }}>
              <Button
                key="back"
                onClick={onCancel}
                className="mx-2.5 cursor-pointer"
              >
                Cancel
              </Button>
              <Button key="save" type="primary" onClick={onOk}>
                Save
              </Button>
            </Col>
          </Row>
        }
        okText="Save"
        width={600}
      >
        <Form
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          style={{ marginTop: 24 }}
          autoComplete="off"
        >
          <div className="text-lg mb-5 font-semibold">Tue, 25 July 2024</div>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Start Date"
                name="Start Date"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Your Start Date.",
                  },
                ]}
              >
                <DatePicker className="h-[39px] w-full" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="End Start"
                name="End Start"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Your End Date.",
                  },
                ]}
              >
                <DatePicker className="h-[39px] w-full" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            label="Capacity"
            name="Capacity"
            rules={[
              {
                required: true,
                message: "Please enter your Capacity!",
              },
            ]}
          >
            <Input size="large" />
          </Form.Item>
          <div className="text-right">2h</div>
          <div className="text-sm mb-5 text-gray-150">
            You are editing this day's shifts only, To set regular shifts, go to
            working hours.
          </div>
        </Form>
      </Modal>
    </>
  );
};
export default AddSlot;