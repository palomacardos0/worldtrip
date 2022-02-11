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
      console.log(backButton)
    }
    else {
      SetBackButton(false)
      console.log(backButton)
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
      my="6"
    >
      {backButton && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={IoIosArrowBack} />}
          variant="unstyled"
          fontSize="24"
          onClick={redirectHome} />
      )

      }



      <Box width="100%" display="flex" alignItems="center" justifyContent="center">
        <Image src="images/Logo.svg" alt="Logo" />
      </Box>

    </Flex>
  )
}