import { Steps } from "antd";
const TrackingHistory = () => {
  return (
    <div className="px-9 py-5 border-gray-250 border-b w-full">
      <h2 className="text-base font-semibold ">Tracking History </h2>
      <Steps
        progressDot
        current={6}
        direction="vertical"
        items={[
          {
            title: "Order Created",
            description: (
              <div className="flex">
                <div className="text-sm w-[416px] break-words overflow-hidden whitespace-nowrap text-ellipsis text-gray-200">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
                <div className="text-sm ml-[20px] text-gray-200">
                  31/05/2024 at 04.00 PM
                </div>
              </div>
            ),
          },
          {
            title: "Accepted",
            description: (
              <div className="flex">
                <div className="text-sm w-[416px] break-words overflow-hidden whitespace-nowrap text-ellipsis text-gray-200">
                  Customer accepted the order.
                </div>
                <div className="text-sm ml-[20px] text-gray-200">
                  31/05/2024 at 04.00 PM
                </div>
              </div>
            ),
          },
          {
            title: "Submitted to QC",
            description: (
              <div className="flex">
                <div className="text-sm w-[416px] break-words overflow-hidden whitespace-nowrap text-ellipsis text-gray-200">
                  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
                  amet consectetur. Lorem ipsum dolor sit amet consectetur.
                  Lorem ipsum dolor sit amet consectetur.
                </div>
                <div className="text-sm ml-[20px] text-gray-200">
                  31/05/2024 at 04.00 PM
                </div>
              </div>
            ),
          },
          {
            title: "Approved by QC",
            description: (
              <div className="flex">
                <div className="text-sm w-[416px] break-words overflow-hidden whitespace-nowrap text-ellipsis text-gray-200">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
                <div className="text-sm ml-[20px] text-gray-200">
                  31/05/2024 at 04.00 PM
                </div>
              </div>
            ),
          },
          {
            title: "Ready to Ship",
            description: (
              <div className="flex">
                <div className="text-sm w-[416px] break-words overflow-hidden whitespace-nowrap text-ellipsis text-gray-200">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
                <div className="text-sm ml-[20px] text-gray-200">
                  31/05/2024 at 04.00 PM
                </div>
              </div>
            ),
          },
          {
            title: "Shipped",
            description: (
              <div className="flex">
                <div className="text-sm w-[416px] break-words overflow-hidden whitespace-nowrap text-ellipsis text-gray-200">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
                <div className="text-sm ml-[20px] text-gray-200">
                  31/05/2024 at 04.00 PM
                </div>
              </div>
            ),
          },
          {
            title: "Completed",
            description: (
              <div className="flex">
                <div className="text-sm w-[416px] break-words overflow-hidden whitespace-nowrap text-ellipsis text-gray-200">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
                <div className="text-sm ml-[20px] text-gray-200">
                  31/05/2024 at 04.00 PM
                </div>
              </div>
            ),
          },
          {
            description: "Awaiting for send to customer.",
          },
        ]}
      />
    </div>
  );
};
export default TrackingHistory;