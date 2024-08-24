import React, { useRef, useState, useEffect } from "react";

const images = [
  "src/assets/CarouselImgs/iloveimg-resized/4-1024x1024.png",
  "src/assets/CarouselImgs/iloveimg-resized/5-1024x1024.png",
  "src/assets/CarouselImgs/iloveimg-resized/237A7016-1024x760.jpg",
  "src/assets/CarouselImgs/iloveimg-resized/237A7018-1024x752.jpg",
  "src/assets/CarouselImgs/iloveimg-resized/237A7022-712x1024.jpg",
  "src/assets/CarouselImgs/iloveimg-resized/244497833_3078079949099815_4998273325053970123_n-1024x1024.jpg",
  "src/assets/CarouselImgs/iloveimg-resized/DSC1117-1024x683.jpg",
  "src/assets/CarouselImgs/iloveimg-resized/IMG-20240704-WA0009-1024x768.jpg",
  "src/assets/CarouselImgs/iloveimg-resized/IMG-20240715-WA0024-1024x464.jpg",
  "src/assets/CarouselImgs/iloveimg-resized/skilledge1.png",
  "src/assets/CarouselImgs/iloveimg-resized/WhatsApp-Image-2020-07-23-at-4.09.20-PM-820x1024.jpeg",
];

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
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= infiniteImages.length - images.length) {
        setTimeout(() => {
          setCurrentIndex(images.length);
          scrollToIndex(images.length, false);
        }, 500);
        return prevIndex;
      } else {
        scrollToIndex(nextIndex);
        return nextIndex;
      }
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexToSet = prevIndex - 1;
      if (prevIndexToSet < images.length) {
        setTimeout(() => {
          setCurrentIndex(infiniteImages.length - 2 * images.length);
          scrollToIndex(infiniteImages.length - 2 * images.length, false);
        }, 500);
        return prevIndex;
      } else {
        scrollToIndex(prevIndexToSet);
        return prevIndexToSet;
      }
    });
  };

  // Auto-slide effect
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(handleNext, 1500); // Change slide every 3 seconds
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  // Initialize scroll position to the middle set of images
  useEffect(() => {
    scrollToIndex(images.length, false);
  }, []);

  const handleTouchStart = (e) => {
    carouselRef.current.touchStartX = e.touches[0].clientX;
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
    <div className=" ">
      <div
        className="relative w-1/2  h-1/2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchMove}
      >
        <div
          ref={carouselRef}
          className="h-[400px] w-[600px] shadow-xl rounded-lg border-b-2 overflow-hidden flex items-center"
        >
          {infiniteImages.map((image, index) => (
            <div
              key={index}
              className="h-full w-full flex-shrink-0 flex-grow-0 "
              style={{ minWidth: "100%" }}
            >
              <img
                className="h-full w-full object-cover"
                src={image}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        {/* <button
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
        </button> */}

        {/* Pagination Dots */}
        {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
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
        </div> */}
      </div>
    </div>
  );
};

export default Coursal;
