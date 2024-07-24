import { Card, Typography, Checkbox, Input, Button, Divider, Form } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SortingArrow from "../../../Common/SortingArrow";
const CreateRole = () => {
  const navigate = useNavigate();
  const [sortOrder, setSortOrder] = useState("asc");
  const handleSort = (order) => {
    setSortOrder(order);
    const sortedData = [].sort((a, b) => {
      if (order === "asc") {
        return a.yourSortField > b.yourSortField ? 1 : -1;
      } else {
        return a.yourSortField < b.yourSortField ? 1 : -1;
      }
    });
    
  };
  return (
    <>
      <Card>
        <div className="flex items-center justify-between relative mb-4">
          <Typography className="text-xl font-semibold mb-0" align={"left"}>
            <LeftOutlined
              onClick={() => navigate(-1)}
              className="text=lg text-black mr-2 cursor-pointer"
            />
            Create Roles
          </Typography>
        </div>
        <Divider />
        <div className="mb-0 flex justify-between flex-wrap">
          <Form layout="horizontal" className="flex gap-4">
            <Form.Item label="Role Name">
              <Input
                className=""
                placeholder="Role name"
                value={"Accounting Admin"}
              />
            </Form.Item>
          </Form>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 bg-gray-50">
              <tr>
                <th scope="col" className="px-3 py-3 whitespace-nowrap">
                  Module <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3 text-center">
                  Read <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3 text-center">
                  Edit <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3 text-center">
                  Delete <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3 text-center ">
                  Add <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3 text-center ">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top"
                >
                  Manage QC
                </th>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Full Access" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="View" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Add" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Edit" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Update Status" />
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top"
                >
                  Manage Vendor
                </th>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Full Access" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="View" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Add" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Edit" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Update Status" />
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top"
                >
                  Manage Driver
                </th>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Full Access" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="View" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Add" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Edit" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Update Status" />
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top"
                >
                  Manage Sub Admin
                </th>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Full Access" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="View" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Add" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Edit" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Update Status" />
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top"
                >
                  Timeslots & Holidays
                </th>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Full Access" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="View" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Add" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Edit" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Update Status" />
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top"
                >
                  Roles
                </th>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Full Access" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="View" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Add" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Edit" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Update Status" />
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top"
                >
                  Business Categorie
                </th>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Full Access" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="View" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Add" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Edit" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Update Status" />
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top"
                >
                  Zones
                </th>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Full Access" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="View" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Add" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Edit" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Update Status" />
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top"
                >
                  Vehicle Type
                </th>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Full Access" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="View" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Add" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Edit" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Update Status" />
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top"
                >
                  Packaging Type
                </th>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Full Access" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="View" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Add" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Edit" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Update Status" />
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top"
                >
                  Drop zone
                </th>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Full Access" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="View" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Add" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Edit" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Update Status" />
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top"
                >
                  Item Sensitivity
                </th>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Full Access" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="View" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Add" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Edit" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Update Status" />
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top"
                >
                  Manage CMS
                </th>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Full Access" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="View" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Add" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Edit" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Update Status" />
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top"
                >
                  Enquiries Form
                </th>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Full Access" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="View" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Add" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Edit" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Update Status" />
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top"
                >
                  System Settings
                </th>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Full Access" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="View" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Add" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Edit" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Update Status" />
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top"
                >
                  Vendor Payouts
                </th>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Full Access" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="View" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Add" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Edit" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Update Status" />
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap vertical-top"
                >
                  Driver Payouts

                </th>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Full Access" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="View" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Add" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox checked value="Edit" />
                </td>
                <td className="px-3 py-4 vertical-top text-center">
                  <Checkbox value="Update Status" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-end flex-wrap gap-3 mt-4">
          <Button>Cancel</Button>
          <Button type="primary">Create Role</Button>
        </div>
      </Card>
    </>
  );
};
export default CreateRole;