import {
  Tooltip,
  Typography,
  Select,
  Input,
  Button,
  Switch,
  Pagination,
} from "antd";
import { DeleteOutlined, PlusOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ConfirmationModal from "../../../../Modal/ConfirmationModal";
import SortingArrow from "../../../../Common/SortingArrow";
const selectZone = [
  {
    value: "1",
    label: "All",
  },
  {
    value: "2",
    label: "Riyadh",
  },
];
const BranchesDetails = () => {
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
      <div className="flex justify-between	mb-4 gap-5">
        <div className="">
          <Typography className="text-xl font-semibold" align={"left"}>
            Manage Branches
          </Typography>
        </div>
        <div>
          <Select
            style={{
              width: 200,
            }}
            placeholder="Select Zone"
            options={selectZone}
            className="mx-1.5 cursor-pointer"
          />
          <Search
            placeholder="Search by name"
            onSearch={onSearch}
            style={{
              width: 200,
            }}
            className="mx-1.5 cursor-pointer"
          />
          <Button
            type="primary"
            size={14}
            icon={<PlusOutlined />}
            className="mx-1.5 cursor-pointer"
            onClick={() => navigate("/add-branch")}
          >
            Add Branch
          </Button>
        </div>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full  text-left	 text-sm  text-gray-500">
          <thead className=" text-gray-700 capitalize text-xs	 bg-gray-50">
            <tr>
              <th scope="col" className="px-3 py-3 whitespace-nowrap">
                Name <SortingArrow onSort={handleSort} />
              </th>
              <th scope="col" className="px-3 py-3">
                Address <SortingArrow onSort={handleSort} />
              </th>
              <th scope="col" className="px-3 py-3">
                Zones <SortingArrow onSort={handleSort} />
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
              <td className="px-3 py-4 vertical-top">Palasia Indore</td>
              <td className="px-3 py-4 vertical-top">
                5th Floor, Punjabi Saraf Building, 1, Race Course Rd, near 56
                Shops,{" "}
              </td>
              <td className="px-3 py-4 vertical-top">Heena's Zone</td>
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
      <div className="text-right mt-4">
        <Pagination defaultCurrent={1} total={50} />
      </div>
      {/* delete modal */}
      <ConfirmationModal
        ConfirmationHeading="Delete"
        ConfirmationParagraph="Are you sure you want to delete this Branch?"
        isOpen={isDeleteModalOpen}
        onOk={handleDeleteOk}
        onCancel={handleDeleteCancel}
      />
    </>
  );
};
export default BranchesDetails;