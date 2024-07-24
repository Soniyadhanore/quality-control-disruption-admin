import { Button } from "antd";
import { useNavigate } from "react-router-dom";
function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col justify-center items-center h-screen"
      style={{ minHeight: "100vh" }}
    >
      <img
        src="images/404_illustration.png"
        alt="Error"
        className="w-[600px] mx-auto"
        style={{ filter: "hue-rotate(300deg)" }}
      />
      <div
        className="text-6xl font-semibold animate-bounce"
        style={{
          animationDuration: "2s",
          animationIterationCount: "infinite",
        }}
      >
        Page Not Found
      </div>
      <div className="text-base text-gray-200 my-5">
        Sorry, We couldn't find what you are looking for!
      </div>
      <Button
        type="primary"
        size="large"
        className="cursor-pointer font-semibold w-[200px]"
        onClick={() => navigate("/")}
      >
        Go Back
      </Button>
    </div>
  );
}
export default PageNotFound;