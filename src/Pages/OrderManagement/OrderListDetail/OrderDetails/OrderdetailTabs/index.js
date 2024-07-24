import { Tabs } from "antd";
import ProductsList from "./ProductsList";
import QcRequestsList from "./QcRequestsList";
const OrderdetailTabs = () => {
  return (
    <>
      <div className="px-9 py-5 flex justify-between border-gray-250 border-b w-full">
        <div className="w-full tab-nav-transparent">
          <Tabs defaultActiveKey="1" className="bg-transparent">
            <Tabs.TabPane tab={<>Products</>} key={1}>
              <ProductsList />
            </Tabs.TabPane>
            <Tabs.TabPane tab={<>QC Requests</>} key={2}>
              <QcRequestsList />
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    </>
  );
};
export default OrderdetailTabs;