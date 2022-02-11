import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { CitiesBox } from "./CitiesBox";

export function Cities() {
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  }

  return (
    <Flex direction="column">
      <Heading mb="10">
        Cidades +100
      </Heading>
      <SimpleGrid flex="1" gap="4" minChildWidth="250px" >

        <CitiesBox
          city="Londres"
          country="Reino Unido"
          flag="https://www.estudopratico.com.br/wp-content/uploads/2016/07/bandeira-reino-unido.jpg"
          flagAlt="bandeira Reino Unido"
          imageUrl="https://viagemeturismo.abril.com.br/wp-content/uploads/2016/12/londres-big-ben.jpeg"
          imageAlt="Londres"
        />
      </SimpleGrid>
    </Flex>
  )
}