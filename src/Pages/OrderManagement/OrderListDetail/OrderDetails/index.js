import { useState } from "react";
import { Button, Dropdown, Menu, message } from "antd";
import { Link } from "react-router-dom";
import {
  EditOutlined,
  CloseOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import Bills from "./Bills";
import TrackingHistory from "./TrackingHistory";
import OrderdetailTabs from "./OrderdetailTabs";
import DeliveryDetail from "./DeliveryDetail";
import DriverDetail from "./DriverDetail";
import BranchDetails from "./BranchDetails";
import HelpDetails from "./HelpDetails";
import CustomerConfirmation from "../../../../Modal/CustomerConfirmation";
import CancelOrder from "../../../../Modal/CancelOrder";
const OrderDetails = () => {
  const [isCustomerConfirmationModalOpen, setIsCustomerConfirmationModalOpen] =
    useState(false);
  const [isMessageSuccess, successMessageContextHolder] = message.useMessage();
  const [isMessageCancel, CancelMessageContextHolder] = message.useMessage();
  const [isCancelOrderModel, setIsCancelOrderModel] = useState(false);
  const handelCancelOrderModelOk = () => {
    setIsCancelOrderModel(false);
    cancelMessage();
  };
  const handelCancelOrderModelCancel = () => {
    setIsCancelOrderModel(false);
  };
  const handleCustomerConfirmationModalOk = () => {
    setIsCustomerConfirmationModalOpen(false);
    successMessage(); // Call the notification function here
  };
  const handleCustomerConfirmationModalCancel = () => {
    setIsCustomerConfirmationModalOpen(false);
  };
  const successMessage = () => {
    isMessageSuccess.open({
      type: "success",
      content: "Order Brief successfully sent to customer.",
      className: "successMessageDetails",
      icon: <CheckCircleOutlined style={{ color: "#fff" }} />,
      duration: 3,
      style: {
        color: "#fff",
        fontSize: "14px",
        fontWeight: "500",
      },
    });
  };
  const cancelMessage = () => {
    isMessageCancel.open({
      type: "success",
      content: "Your order has been successfully cancelled",
      className: "successMessageDetails",
      icon: <CheckCircleOutlined style={{ color: "#fff" }} />,
      duration: 3,
      style: {
        color: "#fff",
        fontSize: "14px",
        fontWeight: "500",
      },
    });
  };
  const editCancelMenu = (
    <Menu>
      <Menu.Item key="1" icon={<EditOutlined />}>
        <a target="_blank" rel="noopener noreferrer" href="/order-management">
          Edit
        </a>
      </Menu.Item>
      <Menu.Item
        key="2"
        icon={<CloseOutlined />}
        onClick={() => setIsCancelOrderModel(true)}
      >
        Cancel
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <div className="flex-auto pt-5 ">
        <div className="px-9 py-5 flex justify-between border-gray-250 border-b">
          <div className="">
            <h2 className="text-base font-semibold ">
              Order# 1246879546
              <button class="px-3 py-1 rounded-md bg-[#F7F5F2] text-black text-sm ml-3 font-normal	">
                QC, Delivery &amp; Payment
              </button>
            </h2>
            <p className="text-sm font-normal mt-[8px] text-black">
              {/* The text below will change when the end status is updated. and also you can remove the the span tag at time of development.*/}
              <span>Order created on </span>
              {/* <span>Brief accepted  on </span>
              <span>In review by QC on </span>
              <span> QC Approved-Packaging on</span>
              <span> Ready to Ship on </span>
              <span>Shipped on </span>
              <span>Delivered/Completed </span>
              <span>No Show on </span>
              <span>Cancelled on </span>
              <span>Rejected on </span> */}
              31/05/2024 at 04.00 PM
              <Link
                to=""
                className="font-semibold text-[#176b53] underline ml-1"
              >
                Track History
              </Link>
            </p>
          </div>
          <div className="flex items-center	">
            <Button
              type="primary"
              size={14}
              className="mx-0 cursor-pointer mr-5"
              onClick={() => setIsCustomerConfirmationModalOpen(true)}
            >
              Send to Customer Approval
            </Button>
            {/* The buttons below will change when the end status is updated */}
            {/* <Button
              type="primary"
              size={14}
              className="mx-0 cursor-pointer mr-5"
            >
             Resend to Customer Approval
            </Button>
            <Button
              type="primary"
              size={14}
              className="mx-0 cursor-pointer mr-5"
            >
             Submit to QC
            </Button> */}
            <Dropdown
              overlay={editCancelMenu}
              placement="bottomRight"
              arrow={{ pointAtCenter: true }}
              trigger={["click"]}
            >
              <img
                src="images/dotsVertical.png"
                alt="Filter"
                className="w-[3px] h-[14px] cursor-pointer"
              />
            </Dropdown>
          </div>
        </div>
        <OrderdetailTabs />
        <Bills />
        <DeliveryDetail />
        <TrackingHistory />
        <BranchDetails />
        {/* The Driver Detail component  below will show when the end status is updated */}
        <DriverDetail />
        <HelpDetails />
      </div>
      {successMessageContextHolder}
      {CancelMessageContextHolder}
      <CustomerConfirmation
        ReasonText="Are you sure?"
        isOpen={isCustomerConfirmationModalOpen}
        onOk={handleCustomerConfirmationModalOk}
        onCancel={handleCustomerConfirmationModalCancel}
      />
      <CancelOrder
        ReasonText="Cancel Order"
        isOpen={isCancelOrderModel}
        onOk={handelCancelOrderModelOk}
        onCancel={handelCancelOrderModelCancel}
      />
    </>
  );
};
export default OrderDetails;