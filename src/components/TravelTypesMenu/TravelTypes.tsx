import { Box, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TravelTypesProps {
  title: string;
  imageUrl: string;
}

export function TravelTypes({ title, imageUrl }: TravelTypesProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Box display="flex" alignItems="center" flexDirection={["row", "row", "row", "column"]} justifyContent="center" mx="6">
      {
        isWideVersion ? <Image src={imageUrl} width={85} mb="6" /> :
          <Text color="yellow.400" fontSize="4xl" mr="2">•</Text>
      }
      <Box>
        <Text fontSize={["lg", "1xl"]} color="gray.600">{title}</Text>

      </Box>
    </Box>
  )
}