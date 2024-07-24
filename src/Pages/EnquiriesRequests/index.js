import { Tooltip, Card, Typography, Select } from "antd";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import SortingArrow from "../../Common/SortingArrow";
import { useState } from "react";
const selectStatus = [
  {
    value: "1",
    label: "Active",
  },
  {
    value: "2",
    label: "Inactive",
  },
];
const EnquiriesRequests = () => {
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
        <div className="flex justify-between	mb-4 gap-5">
          <div className="">
            <Typography className="text-xl font-semibold" align={"left"}>
              Enquiries & Requests
            </Typography>
          </div>
          <div>
            <Select
              style={{
                width: 200,
              }}
              placeholder="Filter by Status"
              options={selectStatus}
              className="mx-1.5 cursor-pointer"
            />
          </div>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full  text-left	 text-sm  text-gray-500">
            <thead className=" text-gray-700 capitalize text-xs	 bg-gray-50">
              <tr>
                <th scope="col" className="px-3 py-3 whitespace-nowrap">
                  Business Name <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3">
                  Store name <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3">
                  Business category <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3">
                  Contact Person Name <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3">
                  Total Branches <SortingArrow onSort={handleSort} />
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
                <td className="px-3 py-4 vertical-top">Archies Gift</td>
                <td className="px-3 py-4 vertical-top">ABC store</td>
                <td className="px-3 py-4 vertical-top">Plants </td>
                <td className="px-3 py-4 vertical-top">John Smith</td>
                <td className="px-3 py-4 vertical-top"> 17</td>
                <td className="px-3 py-4 vertical-top">
                  <p className="flex items-center bg-yellow-100 text-yellow-200 text-center px-[12px] py-[8px] rounded w-full max-w-[76px] h-[32px]">
                    Pending
                  </p>
                </td>
                <td className="px-3 py-4 text-center whitespace-nowrap vertical-top">
                  <Tooltip title="View">
                    <EyeOutlined
                      className="mx-1.5 cursor-pointer"
                      onClick={() => navigate("/view-enquiries-requests")}
                    />
                  </Tooltip>
                  <Tooltip title="Delete">
                    <DeleteOutlined className="mx-1.5 cursor-pointer" />
                  </Tooltip>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-3 py-4 vertical-top">Archies Gift</td>
                <td className="px-3 py-4 vertical-top">ABC store</td>
                <td className="px-3 py-4 vertical-top">Plants </td>
                <td className="px-3 py-4 vertical-top">John Smith</td>
                <td className="px-3 py-4 vertical-top"> 17</td>
                <td className="px-3 py-4 vertical-top">
                  <p className="flex items-center bg-green-50 text-green-200 text-center px-[12px] py-[8px] rounded w-full max-w-[76px] h-[32px]">
                    Reviewed
                  </p>
                </td>
                <td className="px-3 py-4 text-center whitespace-nowrap vertical-top">
                  <Tooltip title="View">
                    <EyeOutlined
                      className="mx-1.5 cursor-pointer"
                      onClick={() => navigate("/view-enquiries-requests")}
                    />
                  </Tooltip>
                  <Tooltip title="Delete">
                    <DeleteOutlined className="mx-1.5 cursor-pointer" />
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
export default EnquiriesRequests;