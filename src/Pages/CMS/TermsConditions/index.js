import { Card, Divider, Button, Typography } from "antd";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const TermsConditions = () => {
  return (
    <Card>
      <div className="">
        <Typography className="text-xl font-semibold" align={"left"}>
          Terms & Conditions
        </Typography>
      </div>
      <Divider />
      <div className="editor-height mb-3">
        <div className="flex items-center justify-between">
          <Typography className="text-lg font-semibold mb-4" align={"left"}>
            Description in English
          </Typography>
        </div>
        <CKEditor className="" editor={ClassicEditor} />
      </div>
      <div className="editor-height mb-3">
        <div className="flex items-center justify-between">
          <Typography className="text-lg font-semibold mb-4" align={"left"}>
            Description in Arabic
          </Typography>
        </div>
        <CKEditor className="" editor={ClassicEditor} />
      </div>
      <Divider />
      <div className="flex justify-end gap-3">
        <Button className="inline-btn">Cancel</Button>
        <Button type="primary">Save</Button>
      </div>
    </Card>
  );
};
export default TermsConditions;