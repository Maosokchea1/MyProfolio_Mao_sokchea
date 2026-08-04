import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import SkillsSection from "../components/home/SkillsSection";
import ServicesSection from "../components/home/ServicesSection";
import ProjectsSection from "../components/home/ProjectsSection";
import EducationSection from "../components/home/EducationSection";
import ExperienceSection from "../components/home/ExperienceSection";
import ContactSection from "../components/home/ContactSection";

function Home() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <EducationSection />
            <ContactSection />
        </>
    );
}

export default Home;
