import { Flex, Image, Text, Grid, Box } from "@chakra-ui/react"

export function TravelTypesMenu() {
  return (
    <Flex display="flex" alignItems="center" justifyContent="center" marginTop="20" marginBottom="20">
      <Grid templateColumns='repeat(5, 1fr)' gap="32">

        <Box display="flex" alignItems="center" flexDirection="column">
          <Image src="images/Cocktail.svg" />
          <Text>vida noturna</Text>
        </Box>
        <Box display="flex" alignItems="center" flexDirection="column">
          <Image src="images/Surf.svg" />
          <Text>praia</Text>
        </Box>
        <Box display="flex" alignItems="center" flexDirection="column">
          <Image src="images/Building.svg" />
          <Text>moderno</Text>
        </Box>
        <Box display="flex" alignItems="center" flexDirection="column">
          <Image src="images/Museum.svg" />
          <Text>clássico</Text>
        </Box>
        <Box display="flex" alignItems="center" flexDirection="column">
          <Image src="images/Earth.svg" />
          <Text>e mais...</Text>
        </Box>
      </Grid>


    </Flex >
  )
}