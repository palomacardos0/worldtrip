import { Box, Flex, Icon, IconButton, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io"

export function Header() {

  const router = useRouter()
  const [backButton, SetBackButton] = useState(false)

  useEffect(() => {
    if (router.asPath !== '/') {
      SetBackButton(true)
    }
    else {
      SetBackButton(false)
    }
  }, [router.asPath])

  function redirectHome() {
    router.push('/')
  }
  return (
    <Flex
      as={"header"}
      width="100%"
      maxWidth={1488}
      align="center"
      mx="auto"
      mt="4"
      px="6"
      my={["2", "2", "4", "6"]}
    >
      {backButton && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={IoIosArrowBack} />}
          fontSize={["18", "24"]}
          variant="ghost"
          size="true"
          onClick={redirectHome} />
      )
      }
      <Box width="100%" display="flex" alignItems="center" justifyContent="center">
        <Image src="images/Logo.svg" alt="Logo" width={[100, 100, 164, 184]} />
      </Box>

    </Flex>
  )
}