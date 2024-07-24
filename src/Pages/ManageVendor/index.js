import { Tooltip, Card, Typography, Input, Button, Switch } from "antd";
import { DeleteOutlined, PlusOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../../Modal/ConfirmationModal";
import { useState } from "react";
import SortingArrow from "../../Common/SortingArrow";
const ManageVendor = () => {
  const navigate = useNavigate();
  const { Search } = Input;
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const handleDeleteOk = () => {
    setIsDeleteModalOpen(false);
  };
  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
  };
  const handleSort = (order) => {
    setSortOrder(order);
    const sortedData = [].sort((a, b) => {
      if (order === "asc") {
        return a.yourSortField > b.yourSortField ? 1 : -1;
      } else {
        return a.yourSortField < b.yourSortField ? 1 : -1;
      }
    });
    
  };
  return (
    <>
      <Card>
        <div className="flex justify-between	mb-4 gap-5">
          <div className="">
            <Typography className="text-xl font-semibold" align={"left"}>
              Manage Vendor
            </Typography>
          </div>
          <div>
            <Search
              placeholder="Search QC by name, email address"
              onSearch={onSearch}
              style={{
                width: 300,
              }}
              className="mx-1.5 cursor-pointer"
            />
            <Button
              type="primary"
              size={14}
              icon={<PlusOutlined />}
              className="mx-1.5 cursor-pointer"
              onClick={() => navigate("/add-vendor")}
            >
              Add new Vendor
            </Button>
          </div>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full  text-left	 text-sm  text-gray-500">
            <thead className=" text-gray-700 capitalize text-xs	 bg-gray-50">
              <tr>
                <th scope="col" className="px-3 py-3 whitespace-nowrap">
                  Business Name  <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3">
                  Store name  <SortingArrow onSort={handleSort} />
                </th> 
                <th scope="col"  className="px-3 py-3">
                  Vendor name  <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3">
                  Business category  <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3">
                  Email address  <SortingArrow onSort={handleSort} />
                </th>
                <th scope="col" className="px-3 py-3">
                  Status
                </th>
                <th
                  scope="col"
                  className="px-3 py-3 text-center whitespace-nowrap vertical-top"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="px-3 py-4 vertical-top">Archies Gift shop</td>
                <td className="px-3 py-4 vertical-top">ABC store </td>
                <td className="px-3 py-4 vertical-top">Noah Gibbs</td>
                <td className="px-3 py-4 vertical-top">Plants</td>
                <td className="px-3 py-4 vertical-top">
                  nickjonas12@gmail.com
                </td>
                <td className="px-3 py-4 vertical-top">
                  <Switch />
                </td>
                <td className="px-3 py-4 text-center whitespace-nowrap vertical-top">
                  <Tooltip title="Edit">
                    <EditOutlined
                      onClick={() => navigate("/add-vendor")}
                      className="mx-1.5 cursor-pointer"
                    />
                  </Tooltip>
                  <Tooltip title="Delete">
                    <DeleteOutlined
                      className="mx-1.5 cursor-pointer"
                      onClick={() => setIsDeleteModalOpen(true)}
                    />
                  </Tooltip>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
      {/* delete modal */}
      <ConfirmationModal
        ConfirmationHeading="Delete"
        ConfirmationParagraph="Are you sure you want to delete this Vendor?"
        isOpen={isDeleteModalOpen}
        onOk={handleDeleteOk}
        onCancel={handleDeleteCancel}
      />
    </>
  );
};
export default ManageVendor;