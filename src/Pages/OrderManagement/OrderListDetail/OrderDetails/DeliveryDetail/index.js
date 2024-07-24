const DeliveryDetail = () => {
  return (
    <>
      <div className="px-9 py-5  border-gray-250 border-b w-full ">
        <h2 className="font-semibold text-base mb-3">
          Customer & Delivery Detail
        </h2>
        <div className="flex">
          <img
            src="images/user-profile.png"
            alt="user-thumbnail"
            className="w-[24px] h-[24px] rounded"
          />
          <div className="pl-2">
            <h3 className="text-sm font-semibold">
              James Doe |{" "}
              <span className=" font-normal text-[#222222]">
                +966 987654321
              </span>
            </h3>
            <p className=" text-sm pt-[4px] text-[#222222]">
              Mohammed Ali Al-Ahmed, 8228 Imam Ali Road, Riyadh 12345-6789
            </p>
            {/* The Scheduled Date  below will change when the end status is updated */}
            <p className=" text-sm pt-[4px] text-[#222222] font-medium">
              Scheduled Date & Time - 20/06/2024, 10:00 AM - 12:00 PM
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default DeliveryDetail;