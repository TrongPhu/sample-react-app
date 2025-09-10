import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import localStorageService from "../../services/localStorageService";
import { logout } from "../../api/authentication";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    localStorageService.clearKey("token");
    navigate("/login");
  };
  return (
    <>
      <div className="border border-solid border-black h-12 fixed top-0 w-full z-10 bg-gray-200 p-2">
        <div className="flex flex-row justify-between">
          <div className="pl-2">Header</div>
          <div className="mr-5 text-center">
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
