import React from 'react';
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppHeader from "./portfolioContainer/navbar";
import Home from "./portfolioContainer/home/home"
import ContactMe from "./portfolioContainer/contactMe/contact";
import About from "./portfolioContainer/aboutMe/aboutMe";
import TimelineDemo from "./portfolioContainer/myResume/formation";


import Footer from "./portfolioContainer/footer";
import Experiences from "./portfolioContainer/experience/myExperience";



const siteProps = {
    name: "Elamri Maryem",
    title: "Web Designer & Data Analyst",
};
const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";
function App() {



    return (
        <>
            <AppHeader/>
            <Router>

                    <Routes>
                        <Route exact path="/" element={<Home name={siteProps.name} title={siteProps.title} />} />
                        <Route path="/formation" element={<TimelineDemo/>} />
                        <Route path="/experience" element={<Experiences/>} />
                        <Route path="/contact" element={<ContactMe/>} />
                        <Route path="/about" element={<About/>} />
                    </Routes>

            </Router>
            <main className="main">
                {/*<MyPDF />*/}
                {/*<Home name={siteProps.name} title={siteProps.title} />*/}
                {/*<About/>*/}
                {/*<TimelineDemo/>*/}
                {/*<Experiences/>*/}
                {/*<ContactMe/>*/}
            </main>
            <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
        </>

    )
}

export default App;
