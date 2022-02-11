import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

interface SlideProps {
  title: string;
  description: string;
  background: string;
  link: string
}

export function Slide({ title, description, background, link }: SlideProps) {
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
        textAlign="center"


      >
        <Link href={`/${link}`}>

          <a >
            <Heading>
              {title}
            </Heading>
            <Text>
              {description}
            </Text>
          </a>

        </Link>
      </Box>

    </Box>

  )
}