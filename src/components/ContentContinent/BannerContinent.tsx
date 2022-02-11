import { Box, Flex, Heading } from "@chakra-ui/react";
interface BannerContientProps {
  imageUrl: string;
  continent: string;
}

export function BannerContinent({ imageUrl, continent }: BannerContientProps) {
  return (
    <Flex display="flex"
      width="100%">
      <Box
        backgroundImage={imageUrl}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        height={500}
        width="100vw"
        display="flex"
        justifyContent="space-between"

      >
        <Heading position="relative" flex="1" alignSelf="flex-end" my="14" mx="36" color="gray.50" fontSize="5xl">
          {continent}
        </Heading>

      </Box>
    </Flex>
  )
}