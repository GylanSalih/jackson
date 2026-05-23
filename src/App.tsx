import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomCursor from './components/Cursor/CustomCursor';
import SiteHeader from './components/Navigation/SiteHeader';
import ScrollToTop from './components/ScrollToTop';
import SiteFooter from './components/SiteFooter/SiteFooter';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Portfolio from './Pages/Portfolio/Portfolio';
import styles from './App.module.scss';

import './fonts/fonts.css';

const App = (): React.ReactElement => {
  return (
    <Router>
      <div className={styles.app}>
        <CustomCursor />
        <ScrollToTop />
        <SiteHeader />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ueber-uns" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </Router>
  );
};

export default App;
