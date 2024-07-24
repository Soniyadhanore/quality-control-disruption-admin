import { Card, Typography, Divider } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import VendorInformation from "../../../Components/VendorInformation";
const AddVendor = () => {
  const navigate = useNavigate();
  return (
    <>
      <Card>
        <div className="">
          <Typography className="text-xl font-semibold" align={"left"}>
            <LeftOutlined className="mr-2" onClick={() => navigate(-1)} />
            Add/Edit Vendor
          </Typography>
        </div>
        <Divider />
        <VendorInformation />
      </Card>
    </>
  );
};
export default AddVendor;