import { Box, Flex, Text, Image } from "@chakra-ui/react";
import OurVisions from '../assests/OurVision.png'

const OurVision = () => {
  return (
    <Box
      w={{base:'100%', lg:'80%'}}
      p={4}
      bg="rgba(245, 245, 245, 1)"
      maxW="1440px"
      mx="auto"
      overflow="hidden"
    >
        <Text
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="700"
            color="#333333"
            lineHeight={'33.12px'}
            mb={2}
          >
            Our Vision
          </Text>
      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify={{ base: "center", lg: "space-between" }}
        wrap="wrap"
      >
        <Box
          flexShrink={0}
          width={{ base: "80%", md: "50%", lg: "auto" }}
          mb={{ base: 8, lg: 0 }}
        >
          <Image
            src={OurVisions}
            alt="Our Vision Illustration"
            maxW="100%"
            mx="auto"
          />
        </Box>
        <Box
          textAlign={{ base: "center", lg: "left" }}
          flex={{ lg: "auto" }}
          px={{ base: 4, lg: 8 }}
        >
          
          <Text fontSize="md" color="gray.600" mb={2}>
            To distribute
          </Text>
          <Text
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="bold"
            color="#00B838"
            mb={2}
          >
            50Cr Cashback
          </Text>
          <Text fontSize={{ base: "md", lg: "lg" }} color="#313131" fontFamily={'League Spartan'} fontWeight="bold">
            by 2025
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default OurVision;
