import React, { Fragment } from 'react';
import Header from "./components/Header";
import MainSection from './components/Main-section';
import PracticeSection from "./components/Practice-section.jsx";
import VisionSection from './components/Vision-section';
import ContactSection from './components/Contact-section';
import ScrollTop from './components/Scroll-top';
import Footer from './components/Footer';

function App(){
    return (
        <Fragment>
            <Header></Header>
            <MainSection></MainSection>
            <PracticeSection></PracticeSection>
            <VisionSection></VisionSection>
            <ContactSection></ContactSection>
            <ScrollTop></ScrollTop>
            <Footer></Footer>
        </Fragment>
    );
}
export default App;