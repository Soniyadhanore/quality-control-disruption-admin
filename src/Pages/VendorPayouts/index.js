import { Card, Typography, Select, DatePicker, Button } from "antd";
import { Input } from "antd";
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
    label: "Resolved",
  },
];
const VendorPayouts = () => {
  const { Search } = Input;
  const { RangePicker } = DatePicker;
  const navigate = useNavigate();
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
        <div className="flex justify-between	mb-4 gap-5">
          <div className="">
            <Typography className="text-xl font-semibold" align={"left"}>
              Vendor Payouts
            </Typography>
          </div>
          <div>
            <RangePicker className="mx-1.5 cursor-pointer" />
            <Select
              style={{
                width: 100,
              }}
              placeholder="Status"
              options={selectStatus}
              className="mx-1.5 cursor-pointer"
            />
            <Search
              placeholder="Search by  Vendor Name "
              onSearch={onSearch}
              style={{
                width: 250,
              }}
              className="mx-1.5 cursor-pointer"
            />
            <Button type="primary" size={14} className="mx-1.5 cursor-pointer">
              Export
            </Button>
          </div>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full  text-left	 text-sm  text-gray-500">
            <thead className=" text-gray-700 capitalize text-xs	 bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-3 py-3 whitespace-nowrap vertical-top"
                >
                  Sales Period <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3 vertical-top">
                  Vendor Name <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3 vertical-top">
                  Expected Payout Date <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3 vertical-top">
                  Actual Payout Date <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3 vertical-top">
                  Expected Payout Amount <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3 vertical-top">
                  Actual Payout Amount <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3 vertical-top">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b text-gray-700">
                <td
                  onClick={() => navigate("/vendor-payouts-detail")}
                  className="px-3 py-4 vertical-top font-semibold cursor-pointer"
                >
                  30/06/2024 To 06/07/2024
                </td>
                <td className="px-3 py-4 vertical-top">Waqas Siddique</td>
                <td className="px-3 py-4 vertical-top">07/07/2024</td>
                <td className="px-3 py-4 vertical-top"></td>
                <td className="px-3 py-4 vertical-top">28.16</td>
                <td className="px-3 py-4 vertical-top">0</td>
                <td className="px-3 py-4 vertical-top">
                  <span className="flex items-center bg-green-50 text-green-200 text-center px-[12px] py-[8px] rounded w-full max-w-[76px] h-[32px]">
                    Planned
                  </span>
                </td>
              </tr>
              <tr className="bg-white border-b text-gray-700">
                <td
                  onClick={() => navigate("/vendor-payouts-detail")}
                  className="px-3 py-4 vertical-top font-semibold cursor-pointer"
                >
                  30/06/2024 To 06/07/2024
                </td>
                <td className="px-3 py-4 vertical-top">Waqas Siddique</td>
                <td className="px-3 py-4 vertical-top">07/07/2024</td>
                <td className="px-3 py-4 vertical-top"></td>
                <td className="px-3 py-4 vertical-top">28.16</td>
                <td className="px-3 py-4 vertical-top">0</td>
                <td className="px-3 py-4 vertical-top">
                  <span className="flex items-center bg-green-50 text-green-200 text-center px-[12px] py-[8px] rounded w-full max-w-[76px] h-[32px]">
                    Planned
                  </span>
                </td>
              </tr>
              <tr className="bg-white border-b text-gray-700">
                <td
                  onClick={() => navigate("/vendor-payouts-detail")}
                  className="px-3 py-4 vertical-top font-semibold cursor-pointer"
                >
                  30/06/2024 To 06/07/2024
                </td>
                <td className="px-3 py-4 vertical-top">Waqas Siddique</td>
                <td className="px-3 py-4 vertical-top">07/07/2024</td>
                <td className="px-3 py-4 vertical-top"></td>
                <td className="px-3 py-4 vertical-top">28.16</td>
                <td className="px-3 py-4 vertical-top">0</td>
                <td className="px-3 py-4 vertical-top">
                  <span className="flex items-center bg-green-50 text-green-200 text-center px-[12px] py-[8px] rounded w-full max-w-[76px] h-[32px]">
                    Planned
                  </span>
                </td>
              </tr>
              <tr className="bg-white border-b text-gray-700">
                <td
                  onClick={() => navigate("/vendor-payouts-detail")}
                  className="px-3 py-4 vertical-top font-semibold cursor-pointer"
                >
                  30/06/2024 To 06/07/2024
                </td>
                <td className="px-3 py-4 vertical-top">Waqas Siddique</td>
                <td className="px-3 py-4 vertical-top">07/07/2024</td>
                <td className="px-3 py-4 vertical-top"></td>
                <td className="px-3 py-4 vertical-top">28.16</td>
                <td className="px-3 py-4 vertical-top">0</td>
                <td className="px-3 py-4 vertical-top">
                  <span className="flex items-center bg-green-50 text-green-200 text-center px-[12px] py-[8px] rounded w-full max-w-[76px] h-[32px]">
                    Planned
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
};
export default VendorPayouts;