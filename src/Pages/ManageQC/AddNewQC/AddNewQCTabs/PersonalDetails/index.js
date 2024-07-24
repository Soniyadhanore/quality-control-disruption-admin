import { Button, Form, Image, Input, Select, Upload } from "antd";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
const selectCategories = [
  {
    value: "1",
    label: "Categories 1 ",
  },
  {
    value: "2",
    label: "Categories 2",
  },
];
const PersonalDetails = () => {
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
          label="Business Categories"
          name="Business Categories"
          rules={[
            {
              type: "number",
              message: "Please Select your Business Categories.",
            },
          ]}
        >
          <Select
            mode="multiple"
            size="large"
            placeholder="Select"
            options={selectCategories}
            defaultValue={['Categories 1', 'Categories 2']}
          />
        </Form.Item>
        <Form.Item
          label="Profile picture"
          name="Profile picture"
          rules={[
            {
              required: true,
              message: "Please Select your Profile picture.",
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
export default PersonalDetails;