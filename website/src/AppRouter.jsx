import React, { useState } from 'react';
import OmniChatWebsite from './OmniChatWebsite';
import FeaturesPage from './FeaturesPage';

const AppRouter = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo(0, 0);
  };

  return currentPage === 'home' ? (
    <OmniChatWebsite onNavigate={handleNavigation} />
  ) : (
    <FeaturesPage onNavigate={handleNavigation} />
  );
};

export default AppRouter;
