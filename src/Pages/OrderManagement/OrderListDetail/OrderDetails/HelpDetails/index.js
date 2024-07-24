import { Link } from "react-router-dom";
const HelpDetails = () => {
  return (
    <>
      <div className="px-9 py-5  border-gray-250 border-b w-full ">
        <h2 className="font-semibold text-base mb-3">We're here to help!</h2>
        <div className="flex">
          <img
            src="images/q-icon.png"
            alt="side-bar-icons"
            className="w-[32px] h-[32px] rounded"
          />
          <div className="pl-2">
            <h3 className="text-sm font-semibold">We're here to help! </h3>
            <p className=" text-sm pt-[4px] text-gray-200 ">
              If you have any questions or need assistance, our support team is
              ready to help you.
            </p>
            <Link
              to=""
              className="font-semibold text-[#176B53] underline text-base pt-[5px]"
            >
              {" "}
              Need Support ?{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default HelpDetails;