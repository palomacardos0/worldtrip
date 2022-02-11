import { Box, Image, Text } from "@chakra-ui/react";

interface TravelTypesProps {
  title: string;
  imageUrl: string;
}

export function TravelTypes({ title, imageUrl }: TravelTypesProps) {
  return (
    <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center">
      <Image src={imageUrl} />
      <Text>{title}</Text>
    </Box>
  )
}