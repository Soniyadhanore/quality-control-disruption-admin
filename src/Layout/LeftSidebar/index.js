import { useState } from "react";
import { Layout, Menu } from "antd";
import {
  RiUserSettingsLine,
  RiShieldUserLine,
  RiSecurePaymentLine,
  RiTimeZoneLine,
} from "react-icons/ri";
import { MdOutlineNoteAlt, MdOutlineSettings } from "react-icons/md";
import { BsDatabaseGear } from "react-icons/bs";
import { LuFolderCog } from "react-icons/lu";
import { IoWalletOutline } from "react-icons/io5";
import { AiOutlineFieldTime } from "react-icons/ai";
import { TbMenuOrder } from "react-icons/tb";
import { Link } from "react-router-dom";
import SubMenu from "antd/es/menu/SubMenu";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const LeftSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className="relative">
    <Sider
      width={250}
      collapsible
      trigger
      collapsed={collapsed}
      onCollapse={toggleCollapsed}
      className="!bg-[#176B53]"
    >
      <div
        className={`logo flex justify-center h-[56px] my-4 transition-opacity duration-500`}
      >
        {collapsed ? (
          <img src="/qc-logo-white.svg" alt="logo" className="" />
        ) : (
          <img src="/qc-logo-white.svg" alt="logo" className="" />
        )}
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={"auto"}
        mode="inline"
        className="!bg-[#176B53]"
      >
        <SubMenu
          key="2"
          icon={<RiUserSettingsLine className="!text-base !min-w-4" />}
          title="User Management"
        >
          <Menu.Item key="21">
            <Link to="/manage-QC">Manage QC</Link>
          </Menu.Item>
          <Menu.Item key="22">
            <Link to="/manage-vendor">Manage Vendor</Link>
          </Menu.Item>
          <Menu.Item key="23">
            <Link to="/manage-driver">Manage Driver</Link>
          </Menu.Item>
          <Menu.Item key="25">
            <Link to="/manage-sub-admin">Manage Sub Admin</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item
          key="3"
          icon={<RiTimeZoneLine className="!text-base !min-w-4" />}
        >
          <Link to="/timeslots-holidays">Timeslots & Holidays</Link>
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={<RiShieldUserLine className="!text-base !min-w-4" />}
        >
          <Link to="/roles-permissions">Roles & Permissions</Link>
        </Menu.Item>
        <SubMenu
          key="5"
          icon={<BsDatabaseGear className="!text-base !min-w-4" />}
          title="Master data Management"
        >
          <Menu.Item key="51">
            <Link to="/manage-business-categories">Business Categories</Link>
          </Menu.Item>
          <Menu.Item key="52">
            <Link to="/manage-zones">Zones</Link>
          </Menu.Item>
          <Menu.Item key="56">
            <Link to="/manage-vehicle-type">Vehicle Type</Link>
          </Menu.Item>
          <Menu.Item key="55">
            <Link to="/manage-packaging-type">Packaging Type</Link>
          </Menu.Item>
          <Menu.Item key="57">
            <Link to="/manage-drop-zone">Drop Zone</Link>
          </Menu.Item>
          <Menu.Item key="53">
            <Link to="/manage-item-sensitivity">Item Sensitivity</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="6"
          icon={<LuFolderCog className="!text-base !min-w-4" />}
          title="Manage CMS"
        >
          <Menu.Item key="63">
            <Link to="/privacy-policy">Privacy Policy</Link>
          </Menu.Item>
          <Menu.Item key="62">
            <Link to="/terms-conditions">Terms & Conditions</Link>
          </Menu.Item>
          <Menu.Item key="61">
            <Link to="/return-policy">Return Policy</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item
          key="7"
          icon={<MdOutlineNoteAlt className="!text-base !min-w-4" />}
        >
          <Link to="/enquiries-requests">Enquire now Form</Link>
        </Menu.Item>
        <Menu.Item
          key="8"
          icon={<MdOutlineSettings className="!text-base !min-w-4" />}
        >
          <Link to="/system-settings">System Settings</Link>
        </Menu.Item>
        <Menu.Item
          key="9"
          icon={<IoWalletOutline className="!text-base !min-w-4" />}
        >
          <Link to="/vendor-payouts">Vendor Payouts</Link>
        </Menu.Item>
        <Menu.Item
          key="10"
          icon={<RiSecurePaymentLine className="!text-base !min-w-4" />}
        >
          <Link to="/driver-payouts">Driver Payouts</Link>
        </Menu.Item>
        <Menu.Item
          key="11"
          icon={<TbMenuOrder className="!text-base !min-w-4" />}
        >
          <Link to="/order-management">Order Management</Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <div className="absolute top-[14px] right-[-42px] text-black text-xl z-[999]">
    {collapsed ? (
      <MenuUnfoldOutlined
        className="toggle-icon"
        onClick={toggleCollapsed}
      />
    ) : (
      <MenuFoldOutlined className="toggle-icon" onClick={toggleCollapsed} />
    )}
  </div>
  </div>
  );
};
export default LeftSidebar;