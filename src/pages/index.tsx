import { Center, Flex } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { TravelTypesMenu } from "../components/TravelTypesMenu";
import { Divider, Text } from "@chakra-ui/react";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <>
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
      <Carousel />

    </>
  )
}
