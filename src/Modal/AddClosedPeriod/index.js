import { Col, DatePicker, Form, Input, Modal, Row } from "antd";
const AddClosedPeriod = ({ isOpen, onOk, onCancel }) => {
  return (
    <>
      <Modal
        title="Add/Edit Closed Period"
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
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Start Date"
                name="Start Date"
                rules={[
                  {
                    required: true,
                    message: "Please enter start date",
                  },
                ]}
              >
                <DatePicker className="h-[39px] w-full" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="End Date"
                name="End Date"
                rules={[
                  {
                    required: true,
                    message: "Please enter End date",
                  },
                ]}
              >
                <DatePicker className="h-[39px] w-full" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            label="Description"
            name="Description"
            rules={[
              {
                required: true,
                type: "number",
                message: "Please enter your Description.",
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
export default AddClosedPeriod;