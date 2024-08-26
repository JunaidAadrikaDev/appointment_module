// import * as React from "react";
// import { useState, useEffect } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// export function CarouselDemo() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const autoPlayInterval = 3000; // Interval for autoplay in milliseconds

//   const images = [
//     { url: "/sliderPic/Dialysis.png" },
//     { url: "/sliderPic/eyeopd.png" },
//     { url: "/sliderPic/frontpage4.png" },
//     { url: "/sliderPic/frontpage7.png" },
//     { url: "/sliderPic/newicu.png" },
//     { url: "/sliderPic/newreception.png" },
//     { url: "/sliderPic/sjhrchos1.png" },
//   ];

//   const itemLength = images.length;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) =>
//         prevIndex === itemLength - 1 ? 0 : prevIndex + 1
//       );
//     }, autoPlayInterval);

//     return () => clearInterval(interval); // Cleanup the interval on unmount
//   }, [itemLength]);

//   const handlePrevious = () => {
//     setActiveIndex(activeIndex === 0 ? itemLength - 1 : activeIndex - 1);
//   };

//   const handleNext = () => {
//     setActiveIndex(activeIndex === itemLength - 1 ? 0 : activeIndex + 1);
//   };

//   return (
//     <Carousel className="w-full max-w-full  relative ">
//       <CarouselContent
//         style={{
//           transform: `translateX(-${activeIndex * 100}%)`,
//           transition: "transform 0.5s ease-in-out",
//         }}
//       >
//         {images.map((image, index) => (
//           <CarouselItem key={index} className="min-w-full">
//             <div className="p-1">
//               <Card>
//                 <CardContent className="flex  items-center justify-center p-0">
//                   <img
//                     src={image.url}
//                     alt={`Slide ${index + 1}`}
//                     className="w-full h-[450px] object-fill"
//                   />
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious onClick={handlePrevious} />
//       <CarouselNext onClick={handleNext} />
//     </Carousel>
//   );
// }

// import * as React from "react";
// import { useState, useEffect } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// export function CarouselDemo({ userImages = [] }) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const autoPlayInterval = 3000; // Interval for autoplay in milliseconds
//   const [isHovered, setIsHovered] = useState(false);

//   const images = userImages.length > 0 ? userImages : [
//     { url: "/sliderPic/Dialysis.png" },
//     { url: "/sliderPic/eyeopd.png" },
//     { url: "/sliderPic/frontpage4.png" },
//     { url: "/sliderPic/frontpage7.png" },
//     { url: "/sliderPic/newicu.png" },
//     { url: "/sliderPic/newreception.png" },
//     { url: "/sliderPic/sjhrchos1.png" },
//   ];

//   const itemLength = images.length;

//   useEffect(() => {
//     if (!isHovered) {
//       const interval = setInterval(() => {
//         setActiveIndex((prevIndex) =>
//           prevIndex === itemLength - 1 ? 0 : prevIndex + 1
//         );
//       }, autoPlayInterval);

//       return () => clearInterval(interval); // Cleanup the interval on unmount
//     }
//   }, [itemLength, isHovered]);

//   const handlePrevious = () => {
//     setActiveIndex(activeIndex === 0 ? itemLength - 1 : activeIndex - 1);
//   };

//   const handleNext = () => {
//     setActiveIndex(activeIndex === itemLength - 1 ? 0 : activeIndex + 1);
//   };

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <Carousel
//       className="w-full max-w-full relative"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <CarouselContent
//         style={{
//           transform: `translateX(-${activeIndex * 100}%)`,
//           transition: "transform 0.5s ease-in-out",
//         }}
//       >
//         {images.map((image, index) => (
//           <CarouselItem key={index} className="min-w-full">
//             <div className="p-1">
//               <Card>
//                 <CardContent className="flex items-center justify-center p-0">
//                   <img
//                     src={image.url}
//                     alt={`Slide ${index + 1}`}
//                     className="w-full h-[450px] object-fill"
//                   />
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious onClick={handlePrevious} />
//       <CarouselNext onClick={handleNext} />
//     </Carousel>
//   );
// }


import * as React from "react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CarouselDemo({ userImages = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayInterval = 3000; // Interval for autoplay in milliseconds
  const [isHovered, setIsHovered] = useState(false);
  const [images, setImages] = useState(userImages.length > 0 ? userImages : [
    { url: "/sliderPic/Dialysis.png" },
    { url: "/sliderPic/eyeopd.png" },
    { url: "/sliderPic/frontpage4.png" },
    { url: "/sliderPic/frontpage7.png" },
    { url: "/sliderPic/newicu.png" },
    { url: "/sliderPic/newreception.png" },
    { url: "/sliderPic/sjhrchos1.png" },
  ]);
  const [newImageUrl, setNewImageUrl] = useState("");

  const itemLength = images.length;

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === itemLength - 1 ? 0 : prevIndex + 1
        );
      }, autoPlayInterval);

      return () => clearInterval(interval); // Cleanup the interval on unmount
    }
  }, [itemLength, isHovered]);

  const handlePrevious = () => {
    setActiveIndex(activeIndex === 0 ? itemLength - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex(activeIndex === itemLength - 1 ? 0 : activeIndex + 1);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleAddImage = () => {
    if (newImageUrl.trim() !== "") {
      setImages([...images, { url: newImageUrl }]);
      setNewImageUrl(""); // Clear the input field after adding the image
    }
  };

  return (
    <div className="w-full max-w-full relative">
      {/* Insert Image Section */}
      <div className="mb-4 flex items-center space-x-2">
        <Input
          type="text"
          placeholder="Enter image URL"
          value={newImageUrl}
          onChange={(e) => setNewImageUrl(e.target.value)}
          className="flex-grow"
        />
        <Button onClick={handleAddImage} className="bg-sky-700">
          Add Image
        </Button>
      </div>

      {/* Carousel Section */}
      <Carousel
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CarouselContent
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            transition: "transform 0.8s ease-in-out", // Smoother transition
          }}
        >
          {images.map((image, index) => (
            <CarouselItem key={index} className="min-w-full">
              <div className="p-1">
                <Card className="rounded-lg shadow-lg overflow-hidden">
                  <CardContent className="flex items-center justify-center p-0">
                    <img
                      src={image.url}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-[450px] object-fill transition-transform duration-700 ease-in-out transform hover:scale-105"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious onClick={handlePrevious} />
        <CarouselNext onClick={handleNext} />
      </Carousel>
    </div>
  );
}

