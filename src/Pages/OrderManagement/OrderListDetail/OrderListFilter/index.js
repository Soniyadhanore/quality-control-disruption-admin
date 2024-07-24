import {
  Button,
  Checkbox,
  Collapse,
  DatePicker,
  Divider,
  Drawer,
  Input,
} from "antd";
const OrderListFilter = ({ isOpen, onClose }) => {
  const { Panel } = Collapse;
  const { Search } = Input;
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <Drawer
      title="All Filters"
      onClose={onClose}
      open={isOpen}
      footer={
        <>
          <div className="flex justify-end py-1 gap-2">
            <Button className="w-full inline-btn">Reset</Button>
            <Button className="w-full" type="primary">
              Show Result
            </Button>
          </div>
        </>
      }
    >
      <div role="presentation" className="w-full overflow-auto">
        <div className="h-[calc(100%-54px)] overflow-auto">
          <div className="flex flex-col mb-5 w-full mx-auto">
            <p className="font-semibold text-sm">Date Range</p>
            <div className="mt-[8px]">
              <DatePicker className="h-[39px] w-full" />
            </div>
          </div>
          <Divider className="m-0" />
          <div className="collapse-simple flex flex-col my-5 w-full mx-auto gap-3">
            <Collapse accordion bordered={false}>
              <Panel header="Timeslot" key="1">
                <div class="flex flex-wrap gap-3.5 mt-[16px]">
                  <div class="w-[137px] bg-gray-300 p-[10px] rounded text-sm">
                    1.00 PM - 2.00 PM
                  </div>
                  <div class="w-[137px] bg-gray-300 p-[10px] rounded text-sm">
                    1.00 PM - 2.00 PM
                  </div>
                  <div class="w-[137px] bg-gray-300 p-[10px] rounded text-sm">
                    1.00 PM - 2.00 PM
                  </div>
                  <div class="w-[137px] bg-gray-300 p-[10px] rounded text-sm">
                    1.00 PM - 2.00 PM
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Divider className="m-0" />
            <Collapse accordion bordered={false}>
              <Panel header="Status" key="2">
                <Checkbox className="mt-[16px]">Approved</Checkbox>
                <br />
                <Checkbox className="mt-[7px]">Pending</Checkbox>
                <br />
                <Checkbox className="mt-[7px]">Rejected</Checkbox>
              </Panel>
            </Collapse>
            <Divider className="m-0" />
            <Collapse accordion bordered={false}>
              <Panel header="Branch" key="3">
                <div className="mt-[16px]">
                  <Search
                    placeholder="Search"
                    onSearch={onSearch}
                    style={{
                      width: 300,
                    }}
                    className=" mx-1.5 cursor-pointer long-height"
                  />
                  <Checkbox className="mt-[10px]">Deerah</Checkbox>
                  <br />
                  <Checkbox className="mt-[7px]">Riyadh-East</Checkbox>
                  <br />
                  <Checkbox className="mt-[7px]">AI-Deerah</Checkbox>
                  <div className="mt-[7px] underline text-green-300 font-semibold ml-[14px] cursor-pointer">
                    See more
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Divider className="m-0" />
            <Collapse accordion bordered={false}>
              <Panel header="Item" key="4">
                <div className="mt-[16px]">
                  <Search
                    placeholder="Search"
                    onSearch={onSearch}
                    style={{
                      width: 300,
                    }}
                    className="mx-1.5 cursor-pointer long-height"
                  />
                  <Checkbox className="mt-[10px]">Pineapple</Checkbox>
                  <br />
                  <Checkbox className="mt-[7px]">Chocolate</Checkbox>
                  <br />
                  <Checkbox className="mt-[7px]">Butterscotch</Checkbox>
                  <div className="mt-[7px] underline text-green-300 font-semibold ml-[14px] cursor-pointer">
                    See more
                  </div>
                </div>
              </Panel>
            </Collapse>
            <Divider className="m-0" />
            <Collapse accordion bordered={false}>
              <Panel header="Zone" key="4">
                <div className="mt-[16px]">
                  <Search
                    placeholder="Search"
                    onSearch={onSearch}
                    style={{
                      width: 300,
                    }}
                    className="mx-1.5 cursor-pointer long-height"
                  />
                  <Checkbox className="mt-[10px]">Riyadh</Checkbox>
                  <br />
                  <Checkbox className="mt-[7px]">Sakara</Checkbox>
                  <br />
                  <Checkbox className="mt-[7px]">Jazan</Checkbox>
                  <div className="mt-[7px] underline text-green-300 font-semibold ml-[14px] cursor-pointer">
                    See more
                  </div>
                </div>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    </Drawer>
  );
};
export default OrderListFilter;