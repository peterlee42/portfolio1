import { useMemo, useState } from 'react';

type CarouselImage = {
  src: string;
  alt: string;
};

export default function ProjectImageCarousel({
  projectName,
  images,
}: {
  projectName: string;
  images: CarouselImage[];
}) {
  const validImages = useMemo(
    () => images.filter((image) => image.src.trim().length > 0),
    [images],
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  if (validImages.length === 0) {
    return null;
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? validImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === validImages.length - 1 ? 0 : prev + 1));
  };

  const currentImage = validImages[currentIndex];

  return (
    <div className='proj-carousel' aria-label={`${projectName} image carousel`}>
      <div className='proj-carousel-frame'>
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className='proj-image proj-carousel-image'
        />

        {validImages.length > 1 && (
          <>
            <button
              type='button'
              className='proj-carousel-btn proj-carousel-btn--prev'
              onClick={goToPrev}
              aria-label={`Show previous ${projectName} image`}
            >
              ‹
            </button>
            <button
              type='button'
              className='proj-carousel-btn proj-carousel-btn--next'
              onClick={goToNext}
              aria-label={`Show next ${projectName} image`}
            >
              ›
            </button>
          </>
        )}
      </div>

      {validImages.length > 1 && (
        <div className='proj-carousel-dots' role='tablist'>
          {validImages.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type='button'
              role='tab'
              aria-selected={currentIndex === index}
              aria-label={`Show image ${index + 1}`}
              className={`proj-carousel-dot ${currentIndex === index ? 'is-active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
