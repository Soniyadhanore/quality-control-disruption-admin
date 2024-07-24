import { Tooltip, Card, Typography, Input, Button, Switch } from "antd";
import { DeleteOutlined, PlusOutlined, EditOutlined } from "@ant-design/icons";
import ConfirmationModal from "../../Modal/ConfirmationModal";
import { useState } from "react";
import AddItemSensitivity from "../../Modal/AddItemSensitivity";
import SortingArrow from "../../Common/SortingArrow";
const ManageItemSensitivity = () => {
  const { Search } = Input;
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [addItemSensitivity, setAddItemSensitivity] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const handleDeleteOk = () => {
    setIsDeleteModalOpen(false);
  };
  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
  };
  const handleAddItemSensitivityOk = () => {
    setAddItemSensitivity(false);
  };
  const handleAddItemSensitivityCancel = () => {
    setAddItemSensitivity(false);
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
              Manage Item Sensitivity
            </Typography>
          </div>
          <div>
            <Search
              placeholder="Search by Item sensitivity"
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
              onClick={() => setAddItemSensitivity(true)}
            >
              Add Item sensitivity
            </Button>
          </div>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full  text-left	 text-sm  text-gray-500">
            <thead className=" text-gray-700 capitalize text-xs	 bg-gray-50">
              <tr>
                <th scope="col" className="px-3 py-3 whitespace-nowrap">
                  Item Sensitivity <SortingArrow onSort={handleSort} />
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
                <td className="px-3 py-4 vertical-top">Hot</td>
                <td className="px-3 py-4 vertical-top">
                  <Switch />
                </td>
                <td className="px-3 py-4 text-center whitespace-nowrap vertical-top">
                  <Tooltip title="Edit">
                    <EditOutlined
                      onClick={() => setAddItemSensitivity(true)}
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
              <tr className="bg-white border-b">
                <td className="px-3 py-4 vertical-top">Cold</td>
                <td className="px-3 py-4 vertical-top">
                  <Switch />
                </td>
                <td className="px-3 py-4 text-center whitespace-nowrap vertical-top">
                  <Tooltip title="Edit">
                    <EditOutlined
                      onClick={() => setAddItemSensitivity(true)}
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
        ConfirmationParagraph="Are you sure you want to delete this Item Sensitivity?"
        isOpen={isDeleteModalOpen}
        onOk={handleDeleteOk}
        onCancel={handleDeleteCancel}
      />
      <AddItemSensitivity
        isOpen={addItemSensitivity}
        onOk={handleAddItemSensitivityOk}
        onCancel={handleAddItemSensitivityCancel}
      />
    </>
  );
};
export default ManageItemSensitivity;