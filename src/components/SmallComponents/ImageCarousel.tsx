import { Box } from "@mui/material";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  return (
    <>
      <Carousel
        swipeable
        draggable
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={500}
      >
        {images.map((image, index) => (
          <Box key={image} mx={0.2}>
            <Image
              src={image}
              alt={`Image ${index}`}
              width={100}
              height={100}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "10px",
                border: "1px solid #e0e0e0",
              }}
            />
          </Box>
        ))}
      </Carousel>
    </>
  );
};

export default ImageCarousel;
