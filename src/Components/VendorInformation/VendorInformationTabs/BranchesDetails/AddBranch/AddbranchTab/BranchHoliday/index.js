import { Button, Card, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import AddClosedPeriod from "../../../../../../../Modal/AddClosedPeriod";
const BranchHoliday = () => {
    const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] =
    useState(false);
  const showChangePasswordModal = () => {
    setIsChangePasswordModalOpen(true);
  };
  const handleChangePasswordOk = () => {
    setIsChangePasswordModalOpen(false);
  };
  const handleChangePasswordCancel = () => {
    setIsChangePasswordModalOpen(false);
  };
  return (
    <>
      <div className="flex justify-between items-center mb-5 gap-5">
        <div className="">
          <Typography className="text-xl font-semibold" align={"left"}>
            Closed Periods
          </Typography>
          <p className="text-base ">
            Set the period when your business is closed.
          </p>
        </div>
        <div>
          <Button
            type="primary"
            size={14}
            icon={<PlusOutlined />}
            className="mx-1.5 cursor-pointer"
            onClick={showChangePasswordModal}
          >
            Add Closed Period
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Card>
          <div className="flex justify-between items-center">
            <div className="font-semibold text-base">
              Wed, 3 Jul 2024 - Wed, 3 Jul 2024
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex justify-between items-center">
            <div className="font-semibold text-base">
              Wed, 3 Jul 2024 - Wed, 3 Jul 2024
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex justify-between items-center">
            <div className="font-semibold text-base">
              Wed, 3 Jul 2024 - Wed, 3 Jul 2024
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex justify-between items-center">
            <div className="font-semibold text-base">
              Wed, 3 Jul 2024 - Wed, 3 Jul 2024
            </div>
          </div>
        </Card>
      </div>
      <AddClosedPeriod
        isOpen={isChangePasswordModalOpen}
        onOk={handleChangePasswordOk}
        onCancel={handleChangePasswordCancel}
      />
    </>
  );
};
export default BranchHoliday;