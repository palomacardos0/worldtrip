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
        <SwiperSlide>
          <Slide
            title="Europa"
            description="O continente mais Antigo"
            background="url('images/Europe.jpg')"
            link="europa"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            title="America do Sul"
            description="Uma das regiões mais biodiversas de todo o planeta."
            background="url('images/South-America.jpg')"
            link="america-do-sul"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            title="America do Norte"
            description="Na América do Norte se encontra maior fronteira em termos de extensão do planeta."
            background="url('images/North-America.jpg')"
            link="america-do-norte"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            title="Ásia"
            description="A Ásia é o maior dos continentes, tanto em área como em população."
            background="url('images/Asia.jpg')"
            link="asia"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            title="África"
            description="A África é conhecida pela sua pluralidade étnica e cultural."
            background="url('images/Africa.jpg')"
            link="africa"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            title="Oceania"
            description="A Oceania possui mais de 10 mil ilhas que constituem 14 países independentes"
            background="url('images/Oceania.jpg')"
            link="oceania"
          />
        </SwiperSlide>


      </Swiper>
    </Flex>
  );
}