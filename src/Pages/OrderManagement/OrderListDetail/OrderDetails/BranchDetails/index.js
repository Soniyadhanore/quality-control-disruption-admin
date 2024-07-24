const BranchDetails = () => {
  return (
    <>
      <div className="px-9 py-5  border-gray-250 border-b w-full ">
        <h2 className="font-semibold text-base mb-3">Branch Detail</h2>
        <div className="flex">
          <img
            src="images/location.png"
            alt="location"
            className="w-[24px] h-[24px] rounded"
          />
          <div className="pl-2">
            <h3 className="text-sm font-semibold">
              Al-Deerah Branch |{" "}
              <span className=" font-normal text-[#222222]">
                +966 9123456789
              </span>
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
export default BranchDetails;