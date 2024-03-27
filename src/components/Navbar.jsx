import React from "react";
import {
  Box,
  Flex,
  Avatar,
  Image,
  VStack,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  Text,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react";
import logo from "../assests/Logo.png";
import Employee from "../assests/Employee-Expense-Claim-2 1.png";
import EnClaim from "../assests/என்Claim Where Personal Interaction Drives Business Success.png";
import Redefining from "../assests/Redefining Marketing with Authenticity and Impact.png";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { extendTheme } from "@chakra-ui/react";
const Links = ["Home", "About", "Stakeholders", "Milestone"]; // Removed 'Our Team' since it will be a Menu
const OurTeamSubMenu = ["Member 1", "Member 2", "Member 3"]; // Replace with actual team members

export const theme = extendTheme({
  colors: {
    primary: {
      50: "#ECFDF5", // The actual hex value for Emerald 50
      // ... other shades
    },
    // ... other color schemes
  },
});

const NavLink = ({ children, href }) => (
  <Button
    as="a"
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={href}
  >
    {children}
  </Button>
);

const SimpleNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColor = useColorModeValue("white", "gray.800");
  const direction = useBreakpointValue({ base: "column", md: "row" });

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        margin="auto"
        width="80%"
        borderRadius="26px"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <HamburgerIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            order={{ base: 1, md: 1 }}
          />  
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image src={logo} htmlWidth="100px" />
            </Box>
            <HStack
              // border='3px solid red'
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link} href={`#${link.toLowerCase()}`}>
                  {link}
                </NavLink>
              ))}
              <Menu>
                <MenuButton as={Button} rounded={"md"}>
                  Our Team
                </MenuButton>
                <MenuList>
                  {OurTeamSubMenu.map((member) => (
                    <MenuItem key={member}>{member}</MenuItem>
                  ))}
                </MenuList>
              </Menu>
              <Button colorScheme="teal" variant="solid">
                Contact
              </Button>
            </HStack>
          </HStack>
        </Flex>

        {isOpen && (
          <Box
            position="absolute"
            right="0"
            mt="2"
            p="2"
            bg={bgColor}
            borderRadius="md"
            shadow="md"
            zIndex="overlay"
          >
            <VStack align="stretch" spacing={3}>
              {Links.map((link) => (
                <NavLink key={link} href={`#${link.toLowerCase()}`}>
                  {link}
                </NavLink>
              ))}
            </VStack>
          </Box>
        )}
      </Box>

      <Flex
        direction={{ base: "column", md: "row" }} // Stack on mobile, row on desktop
        align="center" // Align items vertically in the center
        justify={{ base: "center", md: "space-between" }} // Center on mobile, space-between on desktop
        gap="4" // Spacing between items
        p={4}
        mt={{ base: "5%", md: "2%" }} // Responsive margin-top
        w="80%" // Take the full width of the container
        margin="auto"
      >
        <Box flex={{ base: "none", md: "1" }} align="left" justify="left">
          <Image src={EnClaim} />
          <Button
            bgColor="#00B838"
            color="white" // Assuming you want the text color to be white
            gap="10px"
            mt="5%"
            borderRadius="22px"
          >
            Contact →
          </Button>
        </Box>
        <Image
          src={Employee}
          borderRadius="20px"
          boxSize={{ base: "100%", md: "30%" }}
          objectFit="cover"
        />
      </Flex>

      
    </>
  );
};

export default SimpleNavbar;
