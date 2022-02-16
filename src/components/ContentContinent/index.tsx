import { Box, Icon, IconButton, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";
import { CgInfo } from "react-icons/cg";

interface InfoContinentProps {
  country: string;
  languages: string;
  cities100: string;
}

export function ContentContinent({ country, languages, cities100 }: InfoContinentProps) {
  return (
    <Box display="flex" flexDirection="row" gap={["5", "10"]} alignItems="center" justifyContent={["left", "center"]} fontWeight="500" textAlign={["left", "center"]} >
      <Box >
        <Text fontSize={["3xl", "6xl"]} lineHeight="1" color="yellow.400" >
          {country}
        </Text>   paises
      </Box>
      <Box>
        <Text fontSize={["3xl", "6xl"]} lineHeight="1" color="yellow.400" >
          {languages}
        </Text> linguas
      </Box>
      <Box>
        <Text fontSize={["3xl", "6xl"]} lineHeight="1" color="yellow.400" >
          {cities100}
        </Text> <Box alignItems="center">
          cidades +100
          <Popover isLazy>
            <PopoverTrigger>
              <IconButton
                aria-label="Open navigation"
                icon={<Icon as={CgInfo} color="gray.500" />}
                fontSize={["14", "18"]}
                variant="ghost"
                size="true"
                mx={1}
              >

              </IconButton>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverCloseButton />
              <PopoverBody>
                Cidades que estão entre as 100 mais visitadas do mundo!
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
      </Box>


    </Box>
  )
}