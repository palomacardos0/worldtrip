import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Flex
      display="flex"
      width="100%"
    >
      <Box
        backgroundImage="url('images/Background.svg')"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        height={["60", "80"]}
        width="100vw"
        display="flex"
        justifyContent="space-between"
      >
        <Box mx={["8", "36"]} display="flex" justifyContent="center" flexDirection="column">
          <Text fontWeight="500" fontSize={["2xl", "3xl"]} color="gray.50" marginBottom="5">
            5 Continentes,<br />
            infinitas possibilidades. <br />
          </Text>
          <Text color="gray.50">
            Chegou a hora de tirar do papel a viagem que você <br /> sempre sonhou.
          </Text>

        </Box>
        {
          isWideVersion && (
            <Image
              src="images/Airplane.svg"
              position="relative"
              marginRight="36"
              top="12"
              boxSize="96"

            />
          )
        }



      </Box>

    </Flex>
  )
}