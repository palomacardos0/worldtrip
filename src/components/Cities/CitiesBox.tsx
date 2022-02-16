import { Box, Image, Text } from "@chakra-ui/react";

interface CitiesBoxProps {
  imageUrl: string;
  imageAlt: string;
  country: string;
  city: string;
  flag: string;
  flagAlt: string;
}
export function CitiesBox({ imageUrl, imageAlt, country, city, flag, flagAlt }: CitiesBoxProps) {
  return (
    <Box maxW={['56', '64']} borderWidth='1px' borderRadius='lg' overflow='hidden' borderColor="yellow.400" >
      <Image src={imageUrl} alt={imageAlt} />

      <Box p='6' display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            isTruncated
          >
            {city}
          </Box>

          <Text color="gray.500">
            {country}
          </Text>

        </Box>
        <Image
          borderRadius='full'
          boxSize='12'
          src={flag}
          alt={flagAlt}
        />

      </Box>
    </Box>
  )
}