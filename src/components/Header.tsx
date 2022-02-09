import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as={"header"}
      width="100%"
      maxWidth={1488}
      display="flex"
      align="center"
      justifyContent="center"
      my="6"
    >
      <Image
        src="images/Logo.svg"
      />

    </Flex>
  )
}