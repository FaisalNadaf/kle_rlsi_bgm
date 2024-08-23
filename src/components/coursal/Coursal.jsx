import React, { useRef, useState, useEffect } from "react";

const images = Array(10).fill("src/assets/teachers/rsz_rohit.jpg");

const Coursal = () => {
  const [currentIndex, setCurrentIndex] = useState(images.length);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  // Duplicate images for infinite scroll effect
  const infiniteImages = [...images, ...images, ...images];

  const scrollToIndex = (index, smooth = true) => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const scrollAmount = carousel.offsetWidth * index;
      carousel.scrollTo({
        left: scrollAmount,
        behavior: smooth ? "smooth" : "auto",
      });
    }
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    scrollToIndex(nextIndex);

    // Handle the end of the infinite scroll
    if (nextIndex === infiniteImages.length - images.length) {
      setTimeout(() => {
        setCurrentIndex(images.length);
        scrollToIndex(images.length, false);
      }, 500); // Delay to match the smooth scroll duration
    }
  };

  const handlePrev = () => {
    const prevIndex = currentIndex - 1;
    setCurrentIndex(prevIndex);
    scrollToIndex(prevIndex);

    // Handle the start of the infinite scroll
    if (prevIndex === images.length - 1) {
      setTimeout(() => {
        setCurrentIndex(infiniteImages.length - 2 * images.length);
        scrollToIndex(infiniteImages.length - 2 * images.length, false);
      }, 500); // Delay to match the smooth scroll duration
    }
  };

  // Auto-slide effect
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext();
      }, 1000); // Change slide every 3 seconds

      return () => clearInterval(interval); // Clean up the interval on component unmount
    }
  }, [currentIndex, isPaused]);

  // Initialize scroll position to the middle set of images
  useEffect(() => {
    scrollToIndex(images.length, false);
  }, []);

  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX;
    carouselRef.current.touchStartX = touchStartX;
  };

  const handleTouchMove = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchStartX = carouselRef.current.touchStartX;

    if (touchStartX - touchEndX > 50) {
      handleNext(); // Swipe left
    } else if (touchStartX - touchEndX < -50) {
      handlePrev(); // Swipe right
    }
  };

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchMove}
    >
      <div
        ref={carouselRef}
        className="h-[30%] border-b-2 overflow-hidden flex items-center"
      >
        {infiniteImages.map((image, index) => (
          <div
            key={index}
            className="h-48 w-full flex-shrink-0 flex-grow-0 mx-2"
            style={{ minWidth: "100%" }}
          >
            <img
              className="h-full w-full object-cover"
              src={image}
              alt={`Teacher ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full z-10"
      >
        &#8249;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full z-10"
      >
        &#8250;
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentIndex % images.length === index
                ? "bg-blue-600"
                : "bg-gray-400"
            }`}
            onClick={() => {
              const targetIndex = images.length + index;
              setCurrentIndex(targetIndex);
              scrollToIndex(targetIndex);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Coursal;
