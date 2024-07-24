import { RightOutlined, DownOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import { useState } from "react";
import SortingArrow from "../../../../../../Common/SortingArrow";
const QcRequestsList = () => {
  const [isRightArrow, setIsRightArrow] = useState(false);
  const [isRightArrowSecond, setIsRightArrowSecond] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const handleRightArrow = () => {
    setIsRightArrow(!isRightArrow);
  };
  const handleToggle = () => {
    setIsRightArrowSecond(!isRightArrowSecond);
  };
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
                Request ID <SortingArrow onSort={handleSort} />
              </th>
              <th scope="col" className="px-3 py-3 vertical-top">
                Product Name <SortingArrow onSort={handleSort} />
              </th>
              <th scope="col" className="px-3 py-3 vertical-top">
                Date & Time <SortingArrow onSort={handleSort} />
              </th>
              <th scope="col" className="px-3 py-3 vertical-top">
                Request Initiator <SortingArrow onSort={handleSort} />
              </th>
              <th scope="col" className="px-3 py-3 vertical-top">
                QC Name <SortingArrow onSort={handleSort} />
              </th>
              <th scope="col" className="px-3 py-3 vertical-top">
                Status 
              </th>
              <th scope="col" className="px-3 py-3 vertical-top"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white text-gray-700">
              <td className="px-3 py-4 vertical-top font-semibold cursor-pointer">
                #1245656
              </td>
              <td className="px-3 py-4 vertical-top">Butterscotch Cake</td>
              <td className="px-3 py-4 vertical-top">31/05/2024, 04.00 PM</td>
              <td className="px-3 py-4 vertical-top">John Dukes</td>
              <td className="px-3 py-4 vertical-top">Eddie Lake</td>
              <td className="px-3 py-4 vertical-top">
                <span className="flex items-center bg-yellow-100 text-yellow-200 text-center px-[12px] py-[8px] rounded w-full max-w-[76px] h-[32px]">
                  Pending
                </span>
              </td>
              <td className="px-3 py-4 vertical-top">
                {isRightArrow ? (
                  <DownOutlined onClick={handleRightArrow} />
                ) : (
                  <RightOutlined onClick={handleRightArrow} />
                )}
              </td>
            </tr>
            {isRightArrow && (
              <tr className="bg-white text-gray-700">
                <td colSpan={7} className="pl-[10px]">
                  <div className="flex flex-col">
                    <div className="text-[14px] font-semibold mb-[12px]">
                      Our Submission
                    </div>
                    <div className="text-[14px] font-medium	mb-[8px]">
                      Actual product images
                    </div>
                    <div className="flex gap-[20px] mb-[16px] ">
                      <img src="images/cake1.png" alt="cake-img" />
                      <img src="images/cake2.png" alt="cake-img" />
                    </div>
                    <div className="text-[14px] font-medium	mb-[8px]">
                      Images of prepared/packed product
                    </div>
                    <div className="flex gap-[20px] mb-[16px] ">
                      <img src="images/cake1.png" alt="cake-img" />
                      <img src="images/cake2.png" alt="cake-img" />
                      <img src="images/cake1.png" alt="cake-img" />
                      <img src="images/cake2.png" alt="cake-img" />
                    </div>
                    <div className="text-[14px] font-medium	mb-[8px]">
                      Additional comments
                    </div>
                    <div className="mb-[16px] text-gray-200">
                      Vestibulum tempus imperdiet sem ac porttitor. Vivamus
                      pulvinar commodo orci, suscipit porttitor velit elementum
                      non. Fusce nec pellentesque erat, id lobortis nunc. Donec
                      dui leo, ultrices quis turpis nec, sollicitudin sodales
                      tortor.{" "}
                    </div>
                  </div>
                </td>
              </tr>
            )}
            <tr className="bg-white text-gray-700">
              <td className="px-3 py-4 vertical-top font-semibold cursor-pointer">
                #1245656
              </td>
              <td className="px-3 py-4 vertical-top">Butterscotch Cake</td>
              <td className="px-3 py-4 vertical-top">31/05/2024, 04.00 PM</td>
              <td className="px-3 py-4 vertical-top">John Dukes</td>
              <td className="px-3 py-4 vertical-top">Eddie Lake</td>
              <td className="px-3 py-4 vertical-top">
                <span className="flex items-center bg-red-200 text-red-100 text-center px-[12px] py-[8px] rounded w-full max-w-[76px] h-[32px]">
                  Rejected
                </span>
              </td>
              <td className="px-3 py-4 vertical-top">
                {isRightArrowSecond ? (
                  <DownOutlined onClick={handleToggle} />
                ) : (
                  <RightOutlined onClick={handleToggle} />
                )}
              </td>
            </tr>
            {isRightArrowSecond && (
              <tr className="bg-white text-gray-700">
                <td colSpan={7} className="pl-[10px]">
                  <div className="flex flex-col">
                    <div className="text-[14px] font-semibold mb-[12px]">
                      Our Submission
                    </div>
                    <div className="text-[14px] font-medium	mb-[8px]">
                      Actual product images
                    </div>
                    <div className="flex gap-[20px] mb-[16px] ">
                      <img src="images/cake1.png" alt="cake-img" />
                      <img src="images/cake2.png" alt="cake-img" />
                    </div>
                    <div className="text-[14px] font-medium	mb-[8px]">
                      Images of prepared/packed product
                    </div>
                    <div className="flex gap-[20px] mb-[16px] ">
                      <img src="images/cake1.png" alt="cake-img" />
                      <img src="images/cake2.png" alt="cake-img" />
                      <img src="images/cake1.png" alt="cake-img" />
                      <img src="images/cake2.png" alt="cake-img" />
                    </div>
                    <div className="text-[14px] font-medium	mb-[8px]">
                      Additional comments
                    </div>
                    <div className="mb-[16px] text-gray-200">
                      Vestibulum tempus imperdiet sem ac porttitor. Vivamus
                      pulvinar commodo orci, suscipit porttitor velit elementum
                      non. Fusce nec pellentesque erat, id lobortis nunc. Donec
                      dui leo, ultrices quis turpis nec, sollicitudin sodales
                      tortor.{" "}
                    </div>
                    <Divider className="m-0" />
                    <div className="text-[14px] font-medium	my-[8px]">
                      Images
                    </div>
                    <div className="flex gap-[20px] mb-[16px] ">
                      <img src="images/cake1.png" alt="cake-img" />
                      <img src="images/cake2.png" alt="cake-img" />
                    </div>
                    <div className="text-[14px] font-medium	mb-[8px]">
                      Additional comments
                    </div>
                    <div className="mb-[16px] text-gray-200">
                      Vestibulum tempus imperdiet sem ac porttitor. Vivamus
                      pulvinar commodo orci, suscipit porttitor velit elementum
                      non. Fusce nec pellentesque erat, id lobortis nunc. Donec
                      dui leo, ultrices quis turpis nec, sollicitudin sodales
                      tortor.{" "}
                    </div>
                  </div>
                </td>
              </tr>
            )}
            <tr className="bg-white text-gray-700">
              <td className="px-3 py-4 vertical-top font-semibold cursor-pointer">
                #1245656
              </td>
              <td className="px-3 py-4 vertical-top">Butterscotch Cake</td>
              <td className="px-3 py-4 vertical-top">31/05/2024, 04.00 PM</td>
              <td className="px-3 py-4 vertical-top">John Dukes</td>
              <td className="px-3 py-4 vertical-top">Eddie Lake</td>
              <td className="px-3 py-4 vertical-top">
                <span className="bg-green-50 text-green-200 text-center px-[12px] py-[8px] rounded w-full max-w-[76px] h-[32px]">
                  Approved
                </span>
              </td>
              <td className="px-3 py-4 vertical-top">
                <RightOutlined />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default QcRequestsList;