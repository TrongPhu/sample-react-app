import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import withAuth from "../WithAuth";
import { Button } from "antd";
import localStorageService from "../../services/localStorageService";
import { logout } from "../../api/authentication";

function Home() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    localStorageService.clearKey("token");
    navigate("/login");
  };
  return (
    <div className="flex flex-col overflow-hidden h-screen">
      <div className="border border-solid border-black h-12 fixed top-0 w-full z-10 bg-gray-200 p-2">
        <div className="flex flex-row justify-between">
          <div className="pl-2">Header</div>
          <div className="mr-5 text-center">
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-1 border border-solid border-black h-[calc(100vh-96px)] py-12">
        <div className="w-1/8">
          <div
            className={`${styles.homePage} border border-solid border-black h-full p-2`}
          >
            <div className={styles.link}>
              <NavLink to="/post">See post data</NavLink>
            </div>
            <div className={styles.link}>
              <NavLink to="/currency-convert">Currency conversion</NavLink>
            </div>
            <div className={styles.link}>
              <NavLink to="/stopwatch">Stopwatch</NavLink>
            </div>
            <div className={styles.link}>
              <NavLink to="/custom-style-page">Custom style page</NavLink>
            </div>
          </div>
        </div>
        <div className="flex-1 p-2 overflow-auto">
          <Outlet />
        </div>
      </div>
      <div className="h-10 border border-solid border-black fixed bottom-0 w-full p-1">
        <div className="pl-2">@Footer {Date()}</div>
      </div>
    </div>
  );
}

export default withAuth(Home);
