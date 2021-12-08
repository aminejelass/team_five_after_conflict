import React from "react";
import "../../App.css";
import Cards from "../Cards.jsx";
import HeroSection from "../HeroSection.jsx";
import Footer from "../Footer.jsx";

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;
