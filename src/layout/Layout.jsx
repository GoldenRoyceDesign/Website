import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

export default function Layout() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
