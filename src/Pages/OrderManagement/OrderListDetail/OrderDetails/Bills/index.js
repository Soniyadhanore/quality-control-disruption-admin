const Bills = () => {
  return (
    <>
      <div className="px-9 py-5  border-gray-250 border-b w-full ">
        <table className="w-full border-separate border-spacing-y-1">
          <tbody>
            <tr>
              <td className="text-sm font-medium ">Item Total</td>
              <td className="text-sm font-medium text-right ">SAR 800.00</td>
            </tr>
            <tr>
              <td className="text-sm font-medium text-gray-200 ">
                Tax (VAT 15%)
              </td>
              <td className="text-sm font-medium text-gray-200 text-right ">
                SAR 120.00
              </td>
            </tr>
            <tr>
              {/* The "(Amount payable by customer)" text below will change when the end status is updated */}
              <td className="text-sm font-semibold ">
                Bill Total (Amount payable by customer)
              </td>
              <td className="text-right font-semibold text-base ">
                SAR 920.00
              </td>
            </tr>
          </tbody>
        </table>
        {/* The card details section below will change when the end status is updated */}
        <div className="inline-flex	 bg-[#FBFAF9] py-2	px-3 items-center mt-2">
          <img
            src="images/visa-card.png"
            alt="visa-thumbnail"
            className="w-[32px] h-[32px] rounded"
          />
          <div className="pl-2">
            <h3 className="text-sm font-semibold">
              Paid by card ending xxxx1234
            </h3>
            <p className="text-gray-200 text-xs pt-[4px]">
              On 06/06/2024, 05:10 | Transaction ID #1526548975132
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Bills;