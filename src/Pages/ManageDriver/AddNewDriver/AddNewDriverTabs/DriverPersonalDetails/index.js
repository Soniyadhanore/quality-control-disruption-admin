import { Button, Col, Form, Image, Input, Row, Upload } from "antd";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
const DriverPersonalDetails = () => {
  const [fileList, setFileList] = useState([]);
  const [previewImage, setPreviewImage] = useState("");
  const [phoneNumberInput, setPhoneNumberInput] = useState();
  const [previewOpen, setPreviewOpen] = useState(false);
  const handleChange = ({ fileList }) => setFileList(fileList);
  const handlePreview = async (file) => {
    setPreviewImage(file.url || file.thumbUrl);
    setPreviewOpen(true);
  };
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <img src="images/upload-img.png" alt="Upload" />
    </button>
  );
  return (
    <div className="min-h-[calc(100vh_-_305px)]">
      <Form
        layout="vertical"
        style={{
          maxWidth: 600,
          width: "100%",
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="First Name"
          name="First Name"
          rules={[
            {
              required: true,
              message: "Please enter your First Name.",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="Last Name"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter your Last Name.",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Mobile no"
          name="Mobile no"
          rules={[
            {
              required: true,
              type: "number",
              message: "Please enter your Mobile no.",
            },
          ]}
        >
          <PhoneInput
            className="border border-[#d9d9d9] rounded-lg	px-[11px] h-[40px]"
            international
            defaultCountry="RU"
            value={phoneNumberInput}
            onChange={setPhoneNumberInput}
          />
        </Form.Item>
        <Form.Item
          label="E-mail ID"
          name="E-mail ID"
          rules={[
            {
              required: true,
              type: "number",
              message: "Please enter your E-mail ID.",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Zone"
          name="Zone"
          rules={[
            {
              required: true,
              type: "number",
              message: "Please Select your Zone.",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Vehicle Type"
          name="Vehicle Type"
          rules={[
            {
              required: true,
              type: "number",
              message: "Please Select your Vehicle Type.",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Plate Number"
          name="Plate Number"
          rules={[
            {
              required: true,
              type: "number",
              message: "Please Select your Plate Number.",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Row gutter={16}>
          <Col span={12}>
        <Form.Item
          label="Price/Km"
          name="Price/Km"
          rules={[
            {
              required: true,
              type: "number",
              message: "Please Select your Price/Km.",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
          </Col>
          <Col span={12}>
        <Form.Item
          label="Price/Km(Upto)"
          name="Price/Km(Upto)"
          rules={[
            {
              required: true,
              type: "number",
              message: "Please Select your Price/Km(Upto).",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
</Col>
        </Row>
        <Form.Item
          label="Upload Image"
          name="Upload Image"
          rules={[
            {
              required: true,
              message: "Please Select your Upload Image.",
            },
          ]}
        >
          <div className="mb-4 h-[102px]">
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
              beforeUpload={() => false} // Prevent auto-upload
            >
              {fileList.length >= 1 ? null : uploadButton}
            </Upload>
            {previewImage && (
              <>
                <Image
                  wrapperStyle={{
                    display: "none",
                  }}
                  preview={{
                    visible: previewOpen,
                    onVisibleChange: (visible) => setPreviewOpen(visible),
                    afterOpenChange: (visible) =>
                      !visible && setPreviewImage(""),
                  }}
                  src={previewImage}
                />
              </>
            )}
          </div>
        </Form.Item>
      </Form>
      <div className="flex justify-end gap-3">
          <Button>Cancel</Button>
          <Button type="primary">Save</Button>
        </div>
    </div>
  );
};
export default DriverPersonalDetails;