import { Button, Divider, Form, Image, Input, Select, Upload } from "antd";
import { useState } from "react";
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
const VendorPersonalDetails = () => {
  const [fileList, setFileList] = useState([]);
  const [previewImage, setPreviewImage] = useState("");
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
          label="Business Name"
          name="Business Name"
          rules={[
            {
              required: true,
              message: "Please enter your Business Name.",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Store Name"
          name="Store Name"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter your Store Name.",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Vendor First Name"
          name="Vendor First Name"
          rules={[
            {
              required: true,
              type: "number",
              message: "Please enter your Vendor First Name.",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Vendor Last Name"
          name="Vendor Last Name"
          rules={[
            {
              required: true,
              type: "number",
              message: "Please enter your Vendor Last Name.",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Email Address"
          name="Email Address"
          rules={[
            {
              required: true,
              type: "number",
              message: "Please enter your Email Address.",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Business image"
          name="Business image"
          rules={[
            {
              required: true,
              message: "Please Select your Business image.",
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
          label="Commercial Registration number"
          name="Commercial Registration number"
          rules={[
            {
              required: true,
              type: "number",
              message: "Please enter your Commercial Registration number.",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Total number of branches"
          name="Total number of branches"
          rules={[
            {
              required: true,
              type: "number",
              message: "Please enter your Total number of branches.",
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
      </Form>
      <Divider />
      <div className="flex justify-end gap-3">
        <Button>Cancel</Button>
        <Button type="primary">Save</Button>
      </div>
    </div>
  );
};
export default VendorPersonalDetails;