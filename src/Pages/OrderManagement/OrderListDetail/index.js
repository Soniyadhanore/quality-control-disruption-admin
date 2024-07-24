import { Input } from "antd";
import { useState } from "react";
import OrderDetails from "./OrderDetails";
import OrderListFilter from "./OrderListFilter";
const OrderListDetail = () => {
  const { Search } = Input;
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const [orderDetails, setOrderDetails] = useState(true);
  const [OrderFilterOpen, setOrderFilterOpen] = useState(false);
  const handleOrderDetail = () => {
    setOrderDetails(true);
  };
  const showOrderFilter = () => {
    setOrderFilterOpen(true);
  };
  const handleOrderFilterClose = () => {
    setOrderFilterOpen(false);
  };
  return (
    <div className="flex">
      <div className="w-full max-w-[370px] border-gray-250 border">
        <div className="p-[18px] border-gray-250 border-b">
          <div className="flex items-center">
            <Search
              placeholder="Search by Order ID"
              onSearch={onSearch}
              className="mr-[12px] cursor-pointer"
            />
            <img
              src="images/Filter.png"
              alt="Filter"
              className="w-[24px] h-[24px] cursor-pointer"
              onClick={showOrderFilter}
            />
          </div>
        </div>
        <div
          className="border-gray-250 border-b p-3 cursor-pointer "
          onClick={handleOrderDetail}
        >
          <div className="flex justify-between items-center mb-2">
            <div className="font-bold text-sm">#123456789</div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 rounded-md bg-gray-300 text-black text-sm">
                QC, Delivery & Payment
              </button>
            </div>
          </div>
          <div className="flex">
            <div className="text-base font-semibold">1 x Chocolate Cake...</div>
            <div className="text-gray-200 ">+2 more</div>
          </div>
          <div className="text-base font-normal mt-[8px]">SAR 599.00</div>
        </div>
        <div className="border-gray-250 border-b p-3 cursor-pointer">
          <div className="flex justify-between items-center mb-2">
            <div className="font-bold text-sm">#123456789</div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 rounded-md bg-gray-300 text-black text-sm">
                QC & Payment
              </button>
            </div>
          </div>
          <div className="flex">
            <div className="text-base font-semibold">1 x Pineapple Cake...</div>
            <div className="text-gray-200 ">+2 more</div>
          </div>
          <div className="text-base font-normal mt-[8px]">SAR 599.00</div>
        </div>
        <div className="border-gray-250 border-b p-3 cursor-pointer">
          <div className="flex justify-between items-center mb-2">
            <div className="font-bold text-sm">#123456789</div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 rounded-md bg-gray-300 text-black text-sm">
                QC
              </button>
            </div>
          </div>
          <div className="flex">
            <div className="text-base font-semibold">
              1 x Red Velvet Cake...
            </div>
            <div className="text-gray-200 ">+2 more</div>
          </div>
          <div className="text-base font-normal mt-[8px]">SAR 599.00</div>
        </div>
        <div className="border-gray-250 border-b p-3 cursor-pointer">
          <div className="flex justify-between items-center mb-2">
            <div className="font-bold text-sm">#123456789</div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 rounded-md bg-gray-300 text-black text-sm">
                QC, Delivery & Payment
              </button>
            </div>
          </div>
          <div className="flex">
            <div className="text-base font-semibold">1 x Chocolate Cake...</div>
            <div className="text-gray-200 ">+2 more</div>
          </div>
          <div className="text-base font-normal mt-[8px]">SAR 599.00</div>
        </div>
        <div className="border-gray-250 border-b p-3 cursor-pointer">
          <div className="flex justify-between items-center mb-2">
            <div className="font-bold text-sm">#123456789</div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 rounded-md bg-gray-300 text-black text-sm">
                QC & Payment
              </button>
            </div>
          </div>
          <div className="flex">
            <div className="text-base font-semibold">1 x Pineapple Cake...</div>
            <div className="text-gray-200 ">+2 more</div>
          </div>
          <div className="text-base font-normal mt-[8px]">SAR 599.00</div>
        </div>
        <div className="border-gray-250 border-b p-3 cursor-pointer">
          <div className="flex justify-between items-center mb-2">
            <div className="font-bold text-sm">#123456789</div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 rounded-md bg-gray-300 text-black text-sm">
                QC
              </button>
            </div>
          </div>
          <div className="flex">
            <div className="text-base font-semibold">
              1 x Red Velvet Cake...
            </div>
            <div className="text-gray-200 ">+2 more</div>
          </div>
          <div className="text-base font-normal mt-[8px]">SAR 599.00</div>
        </div>
      </div>
      {orderDetails && <OrderDetails />}
      <OrderListFilter
        isOpen={OrderFilterOpen}
        onClose={handleOrderFilterClose}
      />
    </div>
  );
};
export default OrderListDetail;