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
              <Input as="select" width='30%'>
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
          <Button colorScheme="green" bg="#00b838" width="100%" size="lg" isFullWidth borderRadius="24px">
            Send Message {"->"}
          </Button>
        </VStack>
      </Box>
      <VStack flex="1" alignItems="start" p={8} m={4} spacing={5} bg={"white"}>
        <Flex alignItems="center" justifyContent="space-between" width="full" gap={"10%"}>
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
          <Link
            color="green.500"
            href="#"
            fontSize="10px"
            isExternal
            textDecor="none"
          >
            View on map{"->"}
          </Link>
        </Flex>
        {/* Address */}
        <Text
          textAlign={"left"}
          color="#313131"
          fontFamily="League Spartan"
          fontSize="16px"
          fontWeight="600"
          lineHeight="26px"
          bg={"white"}
        >
          5/792, Nc Colony, Veppadai, Elanthakutai PO, Komarapalayam TK,
          Namakkal - 638008.
        </Text>
        
        <Flex alignItems="center" bg="gray.100" p={2} borderRadius="md" width="100%">
          <AtSignIcon mr={2} />
          <Text mr={2}>Email:</Text>
          <Link href="mailto:info@enclaim.in" isExternal textDecor="none" _hover={{ textDecoration: 'none' }}>
            info@enclaim.in
          </Link>
        </Flex>

        <Flex alignItems="center" bg="gray.100" p={2} borderRadius="md" width="100%">
          <PhoneIcon mr={2} />
          <Link href="tel:+919543308666" textDecor="none" _hover={{ textDecoration: 'none' }}>
            +91 95433 08666
          </Link>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default ContactPage;
