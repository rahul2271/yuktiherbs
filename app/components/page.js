"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { images } from "./constants";
// import Description from "./Description";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);
  return (
    <main className="grid place-items-center md:grid-cols-1 grid-cols-1 w-full mx-auto max-w-max  ">
      <div
        className={`w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 md:rounded-2xl p-6 md:p-0`}
      >
        {images.map((elem, idx) => (
          <div
            key={idx}
            className={`${
              idx === activeImage
                ? "block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out"
                : "hidden"
            }`}
          >
            <Image
              src={elem.src}
              alt=""
              width={2500}
              height={900}
              className="w-full h-full object-cover "
            />
          </div>
        ))}
      </div>
      {/* <Description
        activeImage={activeImage}
        clickNext={clickNext}
        clickPrev={clickPrev}
      /> */}
    </main>
  );
};

export default Slider;