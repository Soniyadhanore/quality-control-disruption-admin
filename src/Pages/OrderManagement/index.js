import { Card, Typography, Tabs } from "antd";
import OrderListDetail from "./OrderListDetail";
const OrderManagement = () => {
  return (
    <>
      <Card>
        <div className="flex justify-between mb-4 gap-5 ">
          <Typography className="text-xl font-semibold" align={"left"}>
            Order Management
          </Typography>
        </div>
        <div className="custom-tabs">
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane
              tab={
                <>
                  New Order <span>9</span>
                </>
              }
              key={1}
            >
              <OrderListDetail />
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={
                <>
                  Preparing <span>6</span>
                </>
              }
              key={2}
            >
              <OrderListDetail />
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={
                <>
                  In-Review <span>4</span>
                </>
              }
              key={3}
            >
              <OrderListDetail />
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={
                <>
                  Packaging <span>2</span>
                </>
              }
              key={4}
            >
              <OrderListDetail />
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={
                <>
                  Ready to Ship <span>7</span>
                </>
              }
              key={5}
            >
              <OrderListDetail />
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={
                <>
                  Shipped <span>3</span>
                </>
              }
              key={6}
            >
              <OrderListDetail />
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={
                <>
                  Closed <span>11</span>
                </>
              }
              className="last-tab"
              key={7}
            >
              <OrderListDetail />
            </Tabs.TabPane>
          </Tabs>
        </div>
      </Card>
    </>
  );
};
export default OrderManagement;