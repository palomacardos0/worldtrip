import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./styles.module.css";

import { Navigation, Pagination } from "swiper";
import { Flex } from "@chakra-ui/react";
import { Slide } from "./Slide";

interface ContinentProps {
  slide: string;
  name: string;
  phrase: string;
  link: string;
}
interface CarouselProps {
  continents: ContinentProps[]
}


export default function Carousel({ continents }: CarouselProps) {

  return (
    <Flex position="relative" height="100%" mx={["0", "0", "12", "24"]} px={["0", "0", "12", "24"]} my="12">
      <Swiper navigation={true} pagination={true} modules={[Navigation, Pagination]} className={styles.swiper} >
        {
          continents.map(data =>
            <SwiperSlide key={data.link}>
              <Slide
                title={data.name}
                description={data.phrase}
                background={`url(${data.slide})`}
                link={data.link}
              />
            </SwiperSlide>

          )
        }
      </Swiper>
    </Flex>
  );
}