import { Box, Icon, Text, Tooltip } from "@chakra-ui/react";
import { CgInfo } from "react-icons/cg";

interface InfoContinentProps {
  country: string;
  languages: string;
  cities100: string;
}

export function ContentContinent({ country, languages, cities100 }: InfoContinentProps) {
  return (
    <Box display="flex" flexDirection="row" gap="10" alignItems="center" justifyContent="center" fontWeight="600" textAlign="center">
      <Box >
        <Text fontSize="6xl" lineHeight="1" color="yellow.400" >
          {country}
        </Text>   paises
      </Box>
      <Box>
        <Text fontSize="6xl" lineHeight="1" color="yellow.400" >
          {languages}
        </Text> linguas
      </Box>
      <Box>
        <Text fontSize="6xl" lineHeight="1" color="yellow.400" >
          {cities100}
        </Text> <Box display="flex" alignItems="center">cidades +100
          <Tooltip label="Cidades que estão entre as 100 mais visitadas do mundo!" aria-label='A tooltip' textAlign="center">
            <span><Icon as={CgInfo} fontSize="18" color="gray.500" ml="1" /></span>
          </Tooltip>
        </Box>
      </Box>


    </Box>
  )
}