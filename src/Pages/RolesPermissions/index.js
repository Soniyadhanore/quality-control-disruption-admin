import { Tooltip, Card, Typography, Button, Switch, Input } from "antd";
import { RedoOutlined, PlusOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import SortingArrow from "../../Common/SortingArrow";
import { useState } from "react";
const RolesPermissions = () => {
  const navigate = useNavigate();
  const { Search } = Input;
  const onSearch = (value, _e, info) => console.log(info?.source, value);
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
        <div className="flex justify-between mb-4 gap-5">
          <div className="">
            <Typography className="text-xl font-semibold" align={"left"}>
              Roles & Permissions
            </Typography>
          </div>
          <div>
            <Search
              placeholder="Search "
              onSearch={onSearch}
              style={{
                width: 250,
              }}
              className="mx-1.5 cursor-pointer"
            />
            <Button
              type="primary"
              size={14}
              icon={<PlusOutlined />}
              className="mx-1.5 cursor-pointer"
              onClick={() => navigate("/create-role")}
            >
              New Role
            </Button>
          </div>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full  text-left	 text-sm  text-gray-500">
            <thead className=" text-gray-700 capitalize text-xs	 bg-gray-50">
              <tr>
                <th scope="col" className="px-3 py-3 whitespace-nowrap">
                  Role <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3">
                  Created Date <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3">
                  Status
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-center whitespace-nowrap vertical-top"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td
                  className="px-3 py-4 vertical-top font-semibold cursor-pointer"
                  onClick={() => navigate("")}
                >
                  Administrator
                </td>
                <td className="px-3 py-4 vertical-top">02/06/2024</td>
                <td className="px-3 py-4 vertical-top">
                  <Switch />
                </td>
                <td className="px-3 py-4 text-center whitespace-nowrap vertical-top">
                  <Tooltip title="Edit permission">
                    <EditOutlined className="mx-1.5 cursor-pointer" />
                  </Tooltip>
                  <Tooltip title="Update status">
                    <RedoOutlined className="mx-1.5 cursor-pointer" />
                  </Tooltip>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
};
export default RolesPermissions;