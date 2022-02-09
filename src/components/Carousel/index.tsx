import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./styles.module.css";

import { Navigation, Pagination } from "swiper";
import { Flex } from "@chakra-ui/react";
import { Slide } from "./Slide";

export default function Carousel() {

  return (
    <Flex position="relative" height="100%" mx="24" px="24" my="12">
      <Swiper navigation={true} pagination={true} modules={[Navigation, Pagination]} className={styles.swiper} >
        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
        <SwiperSlide>
          <Slide
            title="Europa"
            descripiton="O continente mais Antigo"
            background="url('images/continents/Europe.jpg')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            title="America do Sul"
            descripiton="Uma das regiões mais biodiversas de todo o planeta."
            background="url('images/continents/South-America.jpg')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            title="America do Norte"
            descripiton="Na América do Norte se encontra maior fronteira em termos de extensão do planeta."
            background="url('images/continents/North-America.jpg')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            title="Ásia"
            descripiton="A Ásia é o maior dos continentes, tanto em área como em população."
            background="url('images/continents/Asia.jpg')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            title="África"
            descripiton="A África é conhecida pela sua pluralidade étnica e cultural."
            background="url('images/continents/Africa.jpg')"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            title="Oceania"
            descripiton="A Oceania possui mais de 10 mil ilhas que constituem 14 países independentes"
            background="url('images/continents/Oceania.jpg')"
          />
        </SwiperSlide>


      </Swiper>
    </Flex>
  );
}