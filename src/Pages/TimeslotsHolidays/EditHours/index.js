import { useState } from "react";
import {
  Button,
  Card,
  Typography,
  Divider,
  Form,
  InputNumber,
  Select,
  Flex,
  Checkbox,
} from "antd";
import { LeftOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const selectTime = [
  {
    value: "1",
    label: "01:30 AM",
  },
  {
    value: "2",
    label: "02:00 AM",
  },
];
const EditHours = () => {
  const navigate = useNavigate();
  const [phoneNumberInput, setPhoneNumberInput] = useState();
  return (
    <>
      <Card>
        <div className="">
          <Typography className="text-xl font-semibold" align={"left"}>
            <LeftOutlined className="mr-2" onClick={() => navigate(-1)} />
            Add Working hours
          </Typography>
        </div>
        <Divider />
        <div className="min-h-[calc(100vh_-_305px)]">
          <Form
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <Checkbox.Group className="w-full">
              <Flex gap="middle" className="w-full">
                <div className="w-full">
                  <Checkbox value="1">Sunday</Checkbox>
                </div>
                <div className="w-full">
                  <Form.Item label="Open Time" name="Open Time">
                    <Select
                      size="large"
                      placeholder="Select"
                      options={selectTime}
                    />
                  </Form.Item>
                </div>
                <div className="w-full">
                  <Form.Item label="Close Time" name="Close Time">
                    <Select
                      size="large"
                      placeholder="Select"
                      options={selectTime}
                    />
                  </Form.Item>
                </div>
                <div className="w-full">
                  <Form.Item label="Capacity" name="Capacity">
                    <InputNumber
                      type="number"
                      size="large"
                      className="w-full"
                    />
                  </Form.Item>
                </div>
                <div className="w-full">
                  <Button icon={<PlusOutlined />} className="mt-9" />
                </div>
              </Flex>
              <Flex gap="middle" className="w-full">
                <div className="w-full"></div>
                <div className="w-full">
                  <Form.Item label="Open Time" name="Open Time">
                    <Select
                      size="large"
                      placeholder="Select"
                      options={selectTime}
                    />
                  </Form.Item>
                </div>
                <div className="w-full">
                  <Form.Item label="Close Time" name="Close Time">
                    <Select
                      size="large"
                      placeholder="Select"
                      options={selectTime}
                    />
                  </Form.Item>
                </div>
                <div className="w-full">
                  <Form.Item label="Capacity" name="Capacity">
                    <InputNumber
                      type="number"
                      size="large"
                      className="w-full"
                    />
                  </Form.Item>
                </div>
                <div className="w-full">
                  <Button icon={<MinusOutlined />} className="mt-9" danger />
                </div>
              </Flex>
              <Divider className="mt-0" />
              <Flex gap="middle" className="w-full">
                <div className="w-full">
                  <Checkbox value="2">Monday</Checkbox>
                </div>
                <div className="w-full">
                  <Form.Item label="Open Time" name="Open Time">
                    <Select
                      size="large"
                      placeholder="Select"
                      options={selectTime}
                    />
                  </Form.Item>
                </div>
                <div className="w-full">
                  <Form.Item label="Close Time" name="Close Time">
                    <Select
                      size="large"
                      placeholder="Select"
                      options={selectTime}
                    />
                  </Form.Item>
                </div>
                <div className="w-full">
                  <Form.Item label="Capacity" name="Capacity">
                    <InputNumber
                      type="number"
                      size="large"
                      className="w-full"
                    />
                  </Form.Item>
                </div>
                <div className="w-full">
                  <Button icon={<PlusOutlined />} className="mt-9" />
                </div>
              </Flex>
              <Divider className="mt-0" />
              <Flex gap="middle" className="w-full">
                <div className="w-full">
                  <Checkbox value="3">Tuesday</Checkbox>
                </div>
                <div className="w-full">
                  <Form.Item label="Open Time" name="Open Time">
                    <Select
                      size="large"
                      placeholder="Select"
                      options={selectTime}
                    />
                  </Form.Item>
                </div>
                <div className="w-full">
                  <Form.Item label="Close Time" name="Close Time">
                    <Select
                      size="large"
                      placeholder="Select"
                      options={selectTime}
                    />
                  </Form.Item>
                </div>
                <div className="w-full">
                  <Form.Item label="Capacity" name="Capacity">
                    <InputNumber
                      type="number"
                      size="large"
                      className="w-full"
                    />
                  </Form.Item>
                </div>
                <div className="w-full">
                  <Button icon={<PlusOutlined />} className="mt-9" />
                </div>
              </Flex>
              <Divider className="mt-0" />
              <Flex gap="middle" className="w-full">
                <div className="w-full">
                  <Checkbox value="4">Wednesday</Checkbox>
                </div>
                <div className="w-full">
                  <Form.Item label="Open Time" name="Open Time">
                    <Select
                      size="large"
                      placeholder="Select"
                      options={selectTime}
                    />
                  </Form.Item>
                </div>
                <div className="w-full">
                  <Form.Item label="Close Time" name="Close Time">
                    <Select
                      size="large"
                      placeholder="Select"
                      options={selectTime}
                    />
                  </Form.Item>
                </div>
                <div className="w-full">
                  <Form.Item label="Capacity" name="Capacity">
                    <InputNumber
                      type="number"
                      size="large"
                      className="w-full"
                    />
                  </Form.Item>
                </div>
                <div className="w-full">
                  <Button icon={<PlusOutlined />} className="mt-9" />
                </div>
              </Flex>
              <Divider className="mt-0" />
              <Flex gap="middle" className="w-full">
                <div className="w-full">
                  <Checkbox value="5">Thursday</Checkbox>
                </div>
                <div className="w-full">
                  <Form.Item label="Open Time" name="Open Time">
                    <Select
                      size="large"
                      placeholder="Select"
                      options={selectTime}
                    />
                  </Form.Item>
                </div>
                <div className="w-full">
                  <Form.Item label="Close Time" name="Close Time">
                    <Select
                      size="large"
                      placeholder="Select"
                      options={selectTime}
                    />
                  </Form.Item>
                </div>
                <div className="w-full">
                  <Form.Item label="Capacity" name="Capacity">
                    <InputNumber
                      type="number"
                      size="large"
                      className="w-full"
                    />
                  </Form.Item>
                </div>
                <div className="w-full">
                  <Button icon={<PlusOutlined />} className="mt-9" />
                </div>
              </Flex>
              <Divider className="mt-0" />
              <Flex gap="middle" className="w-full">
                <div className="w-full">
                  <Checkbox value="6">Friday</Checkbox>
                </div>
                <div className="w-full">
                  <Form.Item label="Open Time" name="Open Time">
                    <Select
                      size="large"
                      placeholder="Select"
                      options={selectTime}
                    />
                  </Form.Item>
                </div>
                <div className="w-full">
                  <Form.Item label="Close Time" name="Close Time">
                    <Select
                      size="large"
                      placeholder="Select"
                      options={selectTime}
                    />
                  </Form.Item>
                </div>
                <div className="w-full">
                  <Form.Item label="Capacity" name="Capacity">
                    <InputNumber
                      type="number"
                      size="large"
                      className="w-full"
                    />
                  </Form.Item>
                </div>
                <div className="w-full">
                  <Button icon={<PlusOutlined />} className="mt-9" />
                </div>
              </Flex>
              <Divider className="mt-0" />
              <Flex gap="middle" className="w-full">
                <div className="w-full">
                  <Checkbox value="7">Saturday</Checkbox>
                </div>
                <div className="w-full">
                  <Form.Item label="Open Time" name="Open Time">
                    <Select
                      size="large"
                      placeholder="Select"
                      options={selectTime}
                    />
                  </Form.Item>
                </div>
                <div className="w-full">
                  <Form.Item label="Close Time" name="Close Time">
                    <Select
                      size="large"
                      placeholder="Select"
                      options={selectTime}
                    />
                  </Form.Item>
                </div>
                <div className="w-full">
                  <Form.Item label="Capacity" name="Capacity">
                    <InputNumber
                      type="number"
                      size="large"
                      className="w-full"
                    />
                  </Form.Item>
                </div>
                <div className="w-full">
                  <Button icon={<PlusOutlined />} className="mt-9" />
                </div>
              </Flex>
            </Checkbox.Group>
          </Form>
        </div>
        <Divider />
        <div className="flex justify-end gap-3">
          <Button>Cancel</Button>
          <Button type="primary">Save</Button>
        </div>
      </Card>
    </>
  );
};
export default EditHours;