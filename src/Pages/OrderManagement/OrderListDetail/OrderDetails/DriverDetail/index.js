const DriverDetail = () => {
  return (
    <>
      <div className="px-9 py-5  border-gray-250 border-b w-full ">
        <h2 className="font-semibold text-base mb-3">Driver Detail</h2>
        <div className="flex">
          <img
            src="images/side-bar-icons.png"
            alt="side-bar-icons"
            className="w-[24px] h-[24px] rounded"
          />
          <div className="pl-2">
            <h3 className="text-sm font-semibold">
              Ryan Doe |{" "}
              <span className=" font-normal text-[#222222]">+966 12345678</span>
            </h3>
            <p className=" text-sm pt-[4px] text-[#222222]">
              King Abdullah Road, Riyadh 12345-6789
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default DriverDetail;