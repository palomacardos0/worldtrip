import { Box, SimpleGrid, Flex } from "@chakra-ui/react";
import { BannerContinent } from "../components/ContentContinent/BannerContinent";
import { Cities } from "../components/Cities";
import { ContentContinent } from "../components/ContentContinent";
import { GetStaticPaths, GetStaticProps } from "next";
import api from "./api/api"
import { Params } from "next/dist/server/router";
import Head from "next/head";

interface CitiesProps {
  country: string;
  flag: string;
  image: string;
  name: string;
}

interface ContinentProps {
  continent: {
    cities_100: CitiesProps[];
    countries: number;
    descripition: string;
    image: string;
    languages: number;
    name: string;
  }


}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Head>
        <title>{continent.name} | Worldtrip</title>
      </Head>
      <BannerContinent continent={continent.name} imageUrl={continent.image} />
      <Flex direction="column" mx={["8", "16", "36"]} marginBottom="16">

        <SimpleGrid flex="1" gap={["10", "16", "32"]} minChildWidth="250px" fontSize={["medium", "2xl"]} my={["10", "20"]}>
          <Box textAlign={["justify", "left"]}>
            {continent.descripition}
          </Box>
          <ContentContinent cities100={String(continent.cities_100.length)} country={String(continent.countries)} languages={String(continent.languages)} />
        </SimpleGrid>
        <Cities cities_100={continent.cities_100} />
      </Flex>

    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { slug } = params as Params

  const continents = await api.get('/continents').then(response => response.data);

  const continent = continents.find(element => element.link === slug);

  return {
    props: {
      continent: continent ?? null
    }
  }
}