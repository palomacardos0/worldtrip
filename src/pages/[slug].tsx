import { Box, SimpleGrid, Flex } from "@chakra-ui/react";
import { BannerContinent } from "../components/ContentContinent/BannerContinent";
import { Cities } from "../components/Cities";
import { ContentContinent } from "../components/ContentContinent";

export default function Continent() {
  return (
    <>
      <BannerContinent continent="Europa" imageUrl="images/Europe.jpg" />
      <Flex direction="column" mx="36">

        <SimpleGrid flex="1" gap="32" minChildWidth="250px" fontSize="2xl" my="20">
          <Box>
            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Box>
          <ContentContinent cities100="10" country="20" languages="7" />
        </SimpleGrid>
        <Cities />
      </Flex>

    </>
  )
}