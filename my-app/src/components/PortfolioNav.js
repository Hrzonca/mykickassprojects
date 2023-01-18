import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Resume from './Resume'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    if (currentPage === 'Resume') {
        return <Resume />
    }
    if (currentPage === 'Contact')
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header />
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <Footer />
      {renderPage()}
    </div>
  );
}