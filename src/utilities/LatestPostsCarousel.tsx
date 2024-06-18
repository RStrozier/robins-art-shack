import { ReactNode } from 'react';
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from 'react-icons/ri';

interface LatestPostsCarouselProps {
  children: ReactNode;
}

const LatestPostsCarousel = ({ children }:LatestPostsCarouselProps) => {
  return (
    <div className="latest-posts-container">
      <RiArrowLeftDoubleFill className="carousel-arrow left" />
      {children}
      <RiArrowRightDoubleFill className="carousel-arrow right" />
    </div>
  );
};

export default LatestPostsCarousel;