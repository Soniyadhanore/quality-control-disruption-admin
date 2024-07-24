import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "../Layout/AppLayout";
// Pages Route Import
import Login from "../Pages/Auth/Login";
import EnquiriesRequests from "../Pages/EnquiriesRequests";
import ViewEnquiriesRequests from "../Pages/EnquiriesRequests/ViewEnquiriesRequests";
import SystemSettings from "../Pages/SystemSettings";
import VendorPayouts from "../Pages/VendorPayouts";
import VendorPayoutsDetail from "../Pages/VendorPayouts/VendorPayoutsDetail";
import DriverPayouts from "../Pages/DriverPayouts";
import DriverPayoutsDetail from "../Pages/DriverPayouts/DriverPayoutsDetail";
import ManageQC from "../Pages/ManageQC";
import AddNewQC from "../Pages/ManageQC/AddNewQC";
import ManageVendor from "../Pages/ManageVendor";
import AddVendor from "../Pages/ManageVendor/AddVendor";
import ManageDriver from "../Pages/ManageDriver";
import ViewDriver from "../Pages/ManageDriver/ViewDriver";
import AddNewDriver from "../Pages/ManageDriver/AddNewDriver";
import ManageSubAdmin from "../Pages/ManageSubAdmin";
import CreateRole from "../Pages/RolesPermissions/CreateRole";
import CreateSubAdmin from "../Pages/ManageSubAdmin/CreateSubAdmin";
import SubAdminDetails from "../Pages/ManageSubAdmin/SubAdminDetails";
import RolesPermissions from "../Pages/RolesPermissions";
import AddBranch from "../Components/VendorInformation/VendorInformationTabs/BranchesDetails/AddBranch";
import ManageBusinessCategories from "../Pages/ManageBusinessCategories";
import ManageItemSensitivity from "../Pages/ManageItemSensitivity";
import ManageZones from "../Pages/ManageZones";
import AddZone from "../Pages/ManageZones/AddZone";
import ManageVehicleType from "../Pages/ManageVehicleType";
import AddVehicleType from "../Pages/ManageVehicleType/AddVehicleType";
import ManagePackagingType from "../Pages/ManagePackagingType";
import AddPackagingType from "../Pages/ManagePackagingType/AddPackagingType";
import ManageDropZone from "../Pages/ManageDropZone";
import AddDropZone from "../Pages/ManageDropZone/AddDropZone";
import TimeslotsHolidays from "../Pages/TimeslotsHolidays";
import EditHours from "../Pages/TimeslotsHolidays/EditHours";
import ReturnPolicy from "../Pages/CMS/ReturnPolicy";
import PrivacyPolicy from "../Pages/CMS/PrivacyPolicy";
import TermsConditions from "../Pages/CMS/TermsConditions";
import OrderManagement from "../Pages/OrderManagement";
import PageNotFound from "../Pages/PageNotFound";
import EditSlot from "../Components/VendorInformation/VendorInformationTabs/BranchesDetails/AddBranch/AddbranchTab/BranchTimeSlot/EditSlot";
import ForgotPassword from "../Pages/Auth/ForgetPassword";
import ResetPassword from "../Pages/Auth/ResetPassword";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* auth Route */}
      <Route path="/" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      {/* AppLayout with Sidebar and Header */}
      <Route path="/" element={<AppLayout />}>
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* New Pages Routing */}
        <Route path="/manage-QC" element={<ManageQC />} />
        <Route path="/add-new-QC" element={<AddNewQC />} />
        <Route path="/manage-vendor" element={<ManageVendor />} />
        <Route path="/add-vendor" element={<AddVendor />} />
        <Route path="/add-branch" element={<AddBranch />} />
        <Route path="/manage-driver" element={<ManageDriver />} />
        <Route path="/add-new-driver" element={<AddNewDriver />} />
        <Route path="/view-driver" element={<ViewDriver />} />
        <Route path="/manage-sub-admin" element={<ManageSubAdmin />} />
        <Route path="/create-sub-admin" element={<CreateSubAdmin />} />
        <Route path="/sub-admin-details" element={<SubAdminDetails />} />
        <Route path="/timeslots-holidays" element={<TimeslotsHolidays />} />
        <Route path="/edit-hours" element={<EditHours />} />
        <Route path="/roles-permissions" element={<RolesPermissions />} />
        <Route path="/create-role" element={<CreateRole />} />
        <Route
          path="/manage-business-categories"
          element={<ManageBusinessCategories />}
        />
        <Route path="/manage-zones" element={<ManageZones />} />
        <Route path="/add-zone" element={<AddZone />} />
        <Route path="/manage-vehicle-type" element={<ManageVehicleType />} />
        <Route path="/add-vehicle-type" element={<AddVehicleType />} />
        <Route
          path="/manage-packaging-type"
          element={<ManagePackagingType />}
        />
        <Route path="/add-packaging-type" element={<AddPackagingType />} />
        <Route path="/manage-drop-zone" element={<ManageDropZone />} />
        <Route path="/add-drop-zone" element={<AddDropZone />} />
        <Route
          path="/manage-item-sensitivity"
          element={<ManageItemSensitivity />}
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/enquiries-requests" element={<EnquiriesRequests />} />
        <Route
          path="/view-enquiries-requests"
          element={<ViewEnquiriesRequests />}
        />
        <Route path="/system-settings" element={<SystemSettings />} />
        <Route path="/vendor-payouts" element={<VendorPayouts />} />
        <Route
          path="/vendor-payouts-detail"
          element={<VendorPayoutsDetail />}
        />
        <Route path="/driver-payouts" element={<DriverPayouts />} />
        <Route
          path="/driver-payouts-detail"
          element={<DriverPayoutsDetail />}
        />
        <Route path="/order-management" element={<OrderManagement />} />
        <Route path="/edit-slot" element={<EditSlot />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
const Routings = () => {
  return <RouterProvider router={router} />;
};
export default Routings;
