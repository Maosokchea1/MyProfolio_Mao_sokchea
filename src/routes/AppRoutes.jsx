import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Services from "../pages/Services";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import ProjectDetail from "../pages/ProjectDetail";
import Contact from "../pages/Contact";
import Education from "../pages/Education";
import NotFound from "../pages/NotFound";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route
                        path="/projects/:slug"
                        element={<ProjectDetail />}
                    />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
