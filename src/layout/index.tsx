import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import withAuth from "../components/WithAuth";
import SideBar from "./sidebar";

const Layout = () => {
  return (
    <div className="flex flex-col overflow-hidden h-screen">
      <Header />
      <div className="flex flex-row flex-1 border border-solid border-black h-[calc(100vh-96px)] py-12">
        <SideBar />
        <div className="flex-1 p-2 overflow-auto">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withAuth(Layout);
