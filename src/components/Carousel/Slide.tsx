import { Box, Heading, Text } from "@chakra-ui/react";

interface SlideProps {
  title: string;
  descripiton: string;
  background: string;
}

export function Slide({ title, descripiton, background }: SlideProps) {
  return (
    <Box color="gray.50" display="flex" justifyContent="center" alignItems="center" height="96">
      <Box
        position="absolute"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
        backgroundBlendMode="darken"
        bg="rgba(0, 0, 0, .5) "
        backgroundImage={background}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"

      >


        <Heading>
          {title}
        </Heading>
        <Text>
          {descripiton}
        </Text>
      </Box>
    </Box>
  )
}