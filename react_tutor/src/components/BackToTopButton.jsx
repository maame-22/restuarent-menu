import { FaArrowUp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className=" fixed bottom-6 right-6 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="cursor-pointer p-3 bg-orange-600 text-white rounded-full shadow-lg hover:bg-orange-700 transition-colors flex items-center justify-center"
          aria-label="Back to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;