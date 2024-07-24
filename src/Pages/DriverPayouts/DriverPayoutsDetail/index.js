import { Card, Typography, Button, Tabs } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SortingArrow from "../../../Common/SortingArrow";
const DriverPayoutsDetail = () => {
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
        <div className="flex justify-between mb-4 gap-5">
          <div className="">
            <Typography className="text-xl font-semibold" align={"left"}>
            <LeftOutlined className="mr-2" onClick={() => navigate(-1)} />
            Driver Payouts Detail
            </Typography>
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
                Driver Name <SortingArrow onSort={handleSort} />
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
                <td className="px-3 py-4 vertical-top font-semibold cursor-pointer">
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
          <div className="flex justify-between items-center my-5 gap-5">
            <div className="text-sm font-semibold">
              Note - These are remarks entered during settlement
            </div>
            <div>
              <Button
                type="primary"
                size={14}
                className="mx-1.5 cursor-pointer"
              >
                Mark as settled
              </Button>
            </div>
          </div>
          <Card>
          <div className="relative overflow-x-auto">
          <table className="w-full  text-left	 text-sm  text-gray-500">
            <thead className=" text-gray-700 capitalize text-xs	 bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-3 py-3 whitespace-nowrap vertical-top"
                >
                  Journery start location <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3 vertical-top">
                Journey end location <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3 vertical-top whitespace-nowrap">
                Journey date <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3 vertical-top whitespace-nowrap">
                Journey start & end time <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3 vertical-top whitespace-nowrap">
                Journey KM <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3 vertical-top whitespace-nowrap">
                Per KM journey driver cost <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3 vertical-top whitespace-nowrap">
                Total payment for the journey <SortingArrow onSort={handleSort} />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b text-gray-700">
                <td className="px-3 py-4 vertical-top font-semibold cursor-pointer">
                Abi Baker Street Alyasmin Riyadh 13328 Saudi Arabia
                </td>
                <td className="px-3 py-4 vertical-top">XYZ Baker Street Alyasmin Riyadh 13326 Saudi Arabia</td>
                <td className="px-3 py-4 vertical-top">12/06/2024</td>
                <td className="px-3 py-4 vertical-top">8:00am to 10:00am</td>
                <td className="px-3 py-4 vertical-top">10KM</td>
                <td className="px-3 py-4 vertical-top">30 SAR</td>
                <td className="px-3 py-4 vertical-top">50 SAR</td>
              </tr>
              <tr className="bg-white border-b text-gray-700">
                <td className="px-3 py-4 vertical-top font-semibold cursor-pointer">
                Abi Baker Street Alyasmin Riyadh 13328 Saudi Arabia
                </td>
                <td className="px-3 py-4 vertical-top">XYZ Baker Street Alyasmin Riyadh 13326 Saudi Arabia</td>
                <td className="px-3 py-4 vertical-top">12/06/2024</td>
                <td className="px-3 py-4 vertical-top">8:00am to 10:00am</td>
                <td className="px-3 py-4 vertical-top">10KM</td>
                <td className="px-3 py-4 vertical-top">30 SAR</td>
                <td className="px-3 py-4 vertical-top">50 SAR</td>
              </tr>
              <tr className="bg-white border-b text-gray-700">
                <td className="px-3 py-4 vertical-top font-semibold cursor-pointer">
                Abi Baker Street Alyasmin Riyadh 13328 Saudi Arabia
                </td>
                <td className="px-3 py-4 vertical-top">XYZ Baker Street Alyasmin Riyadh 13326 Saudi Arabia</td>
                <td className="px-3 py-4 vertical-top">12/06/2024</td>
                <td className="px-3 py-4 vertical-top">8:00am to 10:00am</td>
                <td className="px-3 py-4 vertical-top">10KM</td>
                <td className="px-3 py-4 vertical-top">30 SAR</td>
                <td className="px-3 py-4 vertical-top">50 SAR</td>
              </tr>
            </tbody>
          </table>
        </div>
          </Card>
        </div>
      </Card>
    </>
  );
};
export default DriverPayoutsDetail;