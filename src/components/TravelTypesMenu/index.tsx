import { Flex, Grid, GridItem, SimpleGrid } from "@chakra-ui/react"
import { TravelTypes } from "./TravelTypes"

export function TravelTypesMenu() {
  return (
    <Flex display="flex" alignItems="center" justifyContent="center" marginTop="20" marginBottom="20">
      <SimpleGrid flex="1" minChildWidth="150px" mx="32" templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}>
        {/* <Grid templateColumns='repeat(5, 1fr)' mx="32"> */}
        <GridItem>
          <TravelTypes imageUrl="images/Cocktail.svg" title="vida noturna" />
        </GridItem>
        <GridItem>
          <TravelTypes imageUrl="images/Surf.svg" title="praia" />
        </GridItem>
        <GridItem>
          <TravelTypes imageUrl="images/Building.svg" title="moderno" />
        </GridItem>
        <GridItem >
          <TravelTypes imageUrl="images/Museum.svg" title="clássico" />
        </GridItem>
        <GridItem colSpan={[2, 2, 2, 1]}>
          <TravelTypes imageUrl="images/Earth.svg" title="e mais..." />
        </GridItem>

        {/* </Grid> */}

      </SimpleGrid>


    </Flex >
  )
}