import { Flex, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import { CitiesBox } from "./CitiesBox";

interface CitiesProps {
  cities_100: {
    country: string;
    flag: string;
    image: string;
    name: string;
  }[]
}

export function Cities({ cities_100 }: CitiesProps) {

  const ar = [1, 1, 3, 23, 34, 24,]

  return (
    <Flex direction="column">
      <Heading mb="10" fontSize={['2xl', '4xl']} fontWeight={['500', '600']}>
        Cidades +100
      </Heading>
      <SimpleGrid flex="1" gap="4" minChildWidth="250px" spacing="4">
        {cities_100.map(city =>
          <GridItem display="flex" justifyContent={["center", "left"]} key={city.name}>
            <CitiesBox
              city={city.name}
              country={city.country}
              flag={city.flag}
              flagAlt={city.name}
              imageUrl={city.image}
              imageAlt={city.name}
            />

          </GridItem>

        )}


      </SimpleGrid>
    </Flex>
  )
}
