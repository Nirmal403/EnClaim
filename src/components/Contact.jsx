import {
  Box,
  Flex,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  VStack,
  Text,
  HStack,
  Link,
  Heading,
} from "@chakra-ui/react";
import { PhoneIcon, AtSignIcon } from "@chakra-ui/icons";

const ContactPage = () => {
  return (
    <Flex
      direction={{ base: "column", md: "column" }}
      justify="center"
      align="center"
      p={8}
      
      bg={"#F5F5F5"}
      minHeight="100vh"
    >
      <Box
        flex="1"
        maxW="600px"
        p={8}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="lg"
        m={4}
      >
        <Heading mb={6}>Get in Touch</Heading>
        <VStack spacing={5}>
          <HStack spacing={5}>
            <FormControl id="first-name" isRequired>
              <FormLabel>First name</FormLabel>
              <Input placeholder="First name" />
            </FormControl>
            <FormControl id="last-name" isRequired>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>
          </HStack>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="you@email.com" />
          </FormControl>
          <FormControl id="phone" isRequired>
            <FormLabel>Phone number</FormLabel>
            <HStack spacing={2}>
              <Input as="select">
                <option>IND</option>
                {/* Add other country options here */}
              </Input>
              <Input type="tel" placeholder="+91 123456789" />
            </HStack>
          </FormControl>
          <FormControl id="subject">
            <FormLabel>Subject</FormLabel>
            <Input placeholder="Enter your subject" />
          </FormControl>
          <FormControl id="message">
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Type your message..." />
          </FormControl>
          <Button colorScheme="green" size="lg" isFullWidth>
            Send Message
          </Button>
        </VStack>
      </Box>
      <VStack flex="1" alignItems="start" p={8} m={4} spacing={5}  bg={"white"}
       >
        <Heading
          size="md"
          color="#808080"
          fontFamily="League Spartan"
          fontSize="20px"
          fontWeight="400"
          lineHeight="28px"
          textAlign="left"
          
        >
          Address
        </Heading>
        <Text
          textAlign={"left"}
          color="#313131"
          fontFamily="League Spartan"
          fontSize="20px"
          fontWeight="600"
          lineHeight="26px"
          bg={"white"}
        >
          5/792, Nc Colony, Veppadai, Elanthakutai PO, Komarapalayam TK,
          Namakkal - 638008.
        </Text>
        <HStack  bg={"white"}>
          {/* <AtSignIcon /> */}
          <Text
            color="#808080"
            fontFamily="League Spartan"
            fontSize="20px"
            fontWeight="400"
            lineHeight="28px"
            textAlign="left"
          >
            Email:
          </Text>
          <Text
            textAlign={"left"}
            color="#313131"
            fontFamily="League Spartan"
            fontSize="20px"
            fontWeight="600"
            lineHeight="26px"
          >
            info@enclaim.in
          </Text>
        </HStack>
        <HStack  bg={"white"}>
          <PhoneIcon />
          <Text>+91 95433 08666</Text>
        </HStack>
        <HStack>
          {/* <MapPinIcon /> */}
          <Link color="green.500" href="#" isExternal>
            View on map
          </Link>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default ContactPage;
