import { useState } from "react";
import { Layout as AntLayout } from "antd";
import HeaderComponent from "../HeaderComponent";
import LeftSidebar from "../LeftSidebar";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  return (
    <AntLayout style={{ minHeight: "100vh" }}>
      <LeftSidebar collapsed={collapsed} toggleCollapsed={toggleSidebar} />
      <AntLayout className="rightSideBar">
        <HeaderComponent toggleCollapsed={toggleSidebar} />
        <AntLayout.Content style={{ margin: "16px 16px" }} className="content-area">
          <Outlet />
        </AntLayout.Content>
      </AntLayout>
    </AntLayout>
  );
};
export default AppLayout;