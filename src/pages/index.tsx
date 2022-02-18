import { Center, Flex } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { TravelTypesMenu } from "../components/TravelTypesMenu";
import { Divider, Text } from "@chakra-ui/react";
import Carousel from "../components/Carousel";
import { GetStaticProps } from "next";
import api from "./api/api"
import { Params } from "next/dist/server/router";
import Continent from "./[slug]";
import Head from "next/head";

interface ContinentProps {
  slide: string;
  name: string;
  phrase: string;
  link: string;
}
interface HomeProps {
  continents: ContinentProps[];
}

export default function Home({ continents }: HomeProps) {
  return (
    <>
      <Head>
        <title>Worldtrip</title>
      </Head>
      <Banner />
      <TravelTypesMenu />
      <Center>
        <Divider orientation='horizontal' width="14" borderColor="gray.600" border="0.5" />
      </Center>
      <Center>

        <Text marginTop="14" textAlign="center" fontWeight="500" fontSize="3xl">
          Vamos Nessa? <br /> Então escolha seu continente
        </Text>
      </Center>
      <Carousel continents={continents} />

    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const continents = await api.get('/continents').then(response => response.data);

  return {
    props: {
      continents
    }
  }
}