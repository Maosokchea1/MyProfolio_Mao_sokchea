import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

function MainLayout() {
    return (
        <div className="flex min-h-screen flex-col bg-[#f6f7fb] text-[#172033]">
            <ScrollToTop />
            <Navbar />

            <main className="flex-1">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default MainLayout;
