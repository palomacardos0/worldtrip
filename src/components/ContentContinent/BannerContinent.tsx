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
        height={[150, 250, 500]}
        width="100vw"
        display="flex"
        justifyContent="space-between"

      >
        <Heading
          position="relative"
          display="flex"
          alignSelf={["center", "flex-end"]}
          justifyContent={["center", "left"]}
          width="100%"
          my={[0, "7", "14"]}
          mx={[0, "16", "36"]}
          color="gray.50"
          fontSize={["3xl", "4xl", "5xl"]}>
          {continent}
        </Heading>

      </Box>
    </Flex>
  )
}