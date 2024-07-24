const ProductsList = () => {
  return (
    <>
      <div className="flex items-center ">
        <div className="basis-[50%] flex">
          <img
            src="images/product-thumnail.png"
            alt="product-thumbnail"
            className="w-[40px] h-[40px] rounded"
          />
          <div className="pl-2">
            <h3 className="text-sm font-semibold">
              Custom Cake <span className="ml-2">(12 inch)</span>
            </h3>
            <ul>
              <li className="text-gray-200 text-xs">Sponge Size : 12 inch</li>
              <li className="text-gray-200 text-xs">
                Sponge Type : Red Velvet
              </li>
              <li className="text-gray-200 text-xs">
                Cake Filling : Chocolate Mousse, Caramel
              </li>
            </ul>
          </div>
        </div>
        <div className="basis-[16.66%] ">
          <img
            src="images/QR-code.png"
            alt="QR-code"
            className="w-[33px] h-[33px] rounded"
          />
        </div>
        <div className="basis-[16.66%] flex justify-center">
          <span class=" px-[10px] py-[3px] rounded  bg-[#FFEFD3] text-[#F9BE00] text-sm">
            Not Initiated
          </span>
          {/* The chips (button)  below will change when the end status is updated */}
          {/* <span class=" px-[10px] py-[3px] rounded  bg-[#F4F6FA] text-[#36618E] text-sm">
           Request Sent
          </span> 
           <span class=" px-[10px] py-[3px] rounded  bg-[#EDFFDF] text-[#2E8900] text-sm">
            Approved
          </span> */}
        </div>
        <div className="basis-[16.66%] flex justify-end">
          <div className="text-sm font-medium">SAR 800.00</div>
        </div>
      </div>
    </>
  );
};
export default ProductsList;