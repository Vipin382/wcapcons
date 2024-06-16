import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import { DotButton, useDotButton } from "./CarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

type SlideProps = {
  index: number;
  children: React.ReactNode;
};
type PropType = {
  slides: SlideProps[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const { selectedIndex, scrollSnaps } = useDotButton(emblaApi);

  return (
    <section className="embla flex flex-row-reverse">
      <div className="embla__viewport w-full" ref={emblaRef}>
        <div className="embla__container w-full">
          {slides.map((item) => (
            <div className="embla__slide w-full " key={item.index}>
              <div className="embla__slide__number w-full">{item.children}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls h-[40px] w-[40px]  rotate-90">
        <div className="embla__dots h-[40px]">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              className={"embla__dot ".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
