import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Docs from "./components/Docs";
import Pricing from "./components/Pricing";
import BugReportCTA from "./components/BugReportCTA";
import Footer from "./components/Footer";

export default function App() {
    return (
        <>
            <Hero />
            <Problem />
            <Solution />
            <Docs />
            <Pricing />
            <BugReportCTA />
            <Footer />
        </>
    );
}
