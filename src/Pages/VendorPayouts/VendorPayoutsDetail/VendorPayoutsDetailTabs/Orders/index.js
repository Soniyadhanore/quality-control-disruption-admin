import { useState } from "react";
import SortingArrow from "../../../../../Common/SortingArrow";

const Orders = () => {
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
      <div className="relative overflow-x-auto">
        <table className="w-full  text-left	 text-sm  text-gray-500">
          <thead className=" text-gray-700 capitalize text-xs	 bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-3 py-3 whitespace-nowrap vertical-top"
              >
                Order ID <SortingArrow onSort={handleSort} />
              </th>
              <th scope="col" className="px-3 py-3 vertical-top">
                Total Order <SortingArrow onSort={handleSort} />
              </th>
              <th scope="col" className="px-3 py-3 vertical-top">
                Payment Amount <SortingArrow onSort={handleSort} />
              </th>
              <th scope="col" className="px-3 py-3 vertical-top">
                Payout Amount <SortingArrow onSort={handleSort} />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b text-gray-700">
              <td className="px-3 py-4 vertical-top font-semibold cursor-pointer">
                1234567
              </td>
              <td className="px-3 py-4 vertical-top">10</td>
              <td className="px-3 py-4 vertical-top">SAR 250</td>
              <td className="px-3 py-4 vertical-top">SAR 100</td>
            </tr>
            <tr className="bg-white border-b text-gray-700">
              <td className="px-3 py-4 vertical-top font-semibold cursor-pointer">
                1234567
              </td>
              <td className="px-3 py-4 vertical-top">10</td>
              <td className="px-3 py-4 vertical-top">SAR 250</td>
              <td className="px-3 py-4 vertical-top">SAR 100</td>
            </tr>
            <tr className="bg-white border-b text-gray-700">
              <td className="px-3 py-4 vertical-top font-semibold cursor-pointer">
                1234567
              </td>
              <td className="px-3 py-4 vertical-top">10</td>
              <td className="px-3 py-4 vertical-top">SAR 250</td>
              <td className="px-3 py-4 vertical-top">SAR 100</td>
            </tr>
            <tr className="bg-white border-b text-gray-700">
              <td className="px-3 py-4 vertical-top font-semibold cursor-pointer">
                1234567
              </td>
              <td className="px-3 py-4 vertical-top">10</td>
              <td className="px-3 py-4 vertical-top">SAR 250</td>
              <td className="px-3 py-4 vertical-top">SAR 100</td>
            </tr>
            <tr className="bg-white border-b text-gray-700">
              <td className="px-3 py-4 vertical-top font-semibold cursor-pointer">
                1234567
              </td>
              <td className="px-3 py-4 vertical-top">10</td>
              <td className="px-3 py-4 vertical-top">SAR 250</td>
              <td className="px-3 py-4 vertical-top">SAR 100</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Orders;