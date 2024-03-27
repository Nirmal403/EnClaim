import React from "react";
import {
  Box,
  Flex,
  Avatar,
  Image,
  Heading,
  VStack,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  Text,
  MenuList,
  Spacer,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react";
import logo from "../../assests/Logo.png";
import Employee from "../../assests/Employee-Expense-Claim-2 1.png";
import EnClaim from "../../assests/என்Claim Where Personal Interaction Drives Business Success.png";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import "../../App.css";
import { extendTheme } from "@chakra-ui/react";
import {useNavigate} from 'react-router-dom'
import Footer from "../../components/Footer";
const Links = ["Home", "About", "Stakeholders", "Milestone",]; // Removed 'Our Team' since it will be a Menu
const OurTeamSubMenu = ["Head of Associate →"]; // Replace with actual team members

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

const HeadofAssociate = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColor = useColorModeValue("white", "gray.800");
  const direction = useBreakpointValue({ base: "column", md: "row" });
  const navigate = useNavigate();


  const gohome =()=>{
    navigate("/");
  }
  const teamMembers = [
    {
      name: 'Anandraj Ponnusamy',
      location: 'Erode, TN',
      avatar: '' // Path to Anandraj's avatar image
    },
    {
      name: 'P.Kangaraj',
      location: 'Karur, TN',
      avatar: '' // Path to Kangaraj's avatar image
    },
    {
      name: 'Manimaran Vilum',
      location: 'Dharmapuri, TN',
      avatar: '' // Path to Manimaran's avatar image
    },
    {
      name: 'Prabhu Yogeshwaran',
      location: 'Namakkal, TN',
      avatar: '' // Path to Prabhu's avatar image
    },
    {
      name: 'Selvam Raman',
      location: 'Coimbatore, TN',
      avatar: '' // Path to Selvam's avatar image
    }
  ];
  

  
  return (
    <>
      <Box
        bg='#0A4836'
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
            //   border='3px solid red'
              bg='#0A4836'
              as={"nav"}
              spacing={8}
              display={{ base: "none", md: "flex" }}
            //   onClick={gohome}
            >
              {Links.map((link) => (
                <NavLink   bg='#0A4836' key={link} href={`#${link.toLowerCase()}`}>
                  {link}
                </NavLink>
              ))}
              <Menu >
                <MenuButton as={Button} rounded={"md"}>
                  Our Team  <i class="arrow down"></i>
                </MenuButton>
                <MenuList color="#00B838" fontWeight={'400'}>
                  {OurTeamSubMenu.map((member) => (
                    <MenuItem key={member}>{member}</MenuItem>
                  ))}
                </MenuList>
              </Menu>
              <Button
                bgColor="#00B838"
                color="white"
                gap="10px"
                borderRadius="22px"
              >
                Contact →
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

      <Box as="main" p={4}  marginTop="5%" marginBottom="3%" bg='#0A4836'>
        <VStack spacing={4} >
          {/* Heading */}
          <Heading color='white'>Head of Associates</Heading>
          <Text color='white'>Home/ Our Team /Head of Associates</Text>
          
          {/* Team Member Grid */}
          <Flex wrap="wrap" justifyContent="center" gap={4}>
            {teamMembers.map((member) => (
              <Box
                key={member.name}
                p={4}
                bg="gray.100"
                borderRadius="md"
                boxShadow="md"
                textAlign="center"
              >
                <Avatar name={member.name} src={member.avatar} bg={"#0A4836"} color='white'/>
                <Text mt={2}>{member.name}</Text>
                <Text fontSize="sm">{member.location}</Text>
              </Box>
            ))}
          </Flex>
        </VStack>
      </Box>       


      {/* <Footer /> */}
    </>
  );
};

export default HeadofAssociate;
