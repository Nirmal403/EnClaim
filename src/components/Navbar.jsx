import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  Spacer,
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
import "../App.css";
import { extendTheme } from "@chakra-ui/react";
import { Link } from "react-scroll";

const Links = ["Home", "About", "Stakeholders", "Milestone"]; // Removed 'Our Team' since it will be a Menu
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

const SimpleNavbar = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColor = useColorModeValue("white", "gray.800");
  const direction = useBreakpointValue({ base: "column", md: "row" });
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose(); // Close the menu if clicked outside
      }
    };

    // Add click event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const gohome = () => {
    navigate("/");
  };
  const gotoheadofassociates = () => {
    navigate("/headofassociates");
  };

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        margin="auto"
        // height={{base:'60px'}}
        width="80%"
        borderRadius="26px"
        
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} >
          <IconButton
            size={"md"}
            icon={isOpen ? <HamburgerIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            order={{ base: 1, md: 1 }}
            
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box onClick={gohome} cursor="pointer">
              <Image src={logo} htmlWidth="100px" />
            </Box>

            <HStack
              // border='3px solid red'
              as={"nav"}
              spacing={8}
              display={{ base: "none", md: "flex" }}
              // onClick={gohome}
            >
              {Links.map((link) => (
                <Link
                  key={link}
                  to={
                    link === "Home"
                      ? "homeSection"
                      : link === "Stakeholders"
                      ? "Designation"
                      : link === "Milestone"
                      ? "ourVisionSection"
                      : `${link.toLowerCase()}Section`
                  } // Ensure IDs are set correctly in your components
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="navbar-link"
                  style={{ cursor: "pointer", padding: "10px" }}
                >
                  {link}
                </Link>
              ))}
              <Menu>
                <MenuButton as={Button} rounded={"md"}>
                  Our Team <i class="arrow down"></i>
                </MenuButton>
                <MenuList color="#00B838" fontWeight={"400"}>
                  {OurTeamSubMenu.map((member) => (
                    <MenuItem onClick={gotoheadofassociates} key={member}>
                      {member}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
              {/* <Button
                bgColor="#00B838"
                color="white"
                gap="10px"
                borderRadius="22px"
              >
                Contact →
              </Button> */}
              <Link
                to="contactSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="contact-button"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#00B838",
                  color: "white",
                  // marginTop:'4%',
                  padding: "0 24px",
                  height: "40px",
                  borderRadius: "22px",
                  cursor: "pointer",
                }}
              >
                Contact →
              </Link>
            </HStack>
          </HStack>
        </Flex>

        {isOpen && (
          <Box
            ref={menuRef}
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
              {Links.map((link) => {
                if (link === "Milestone") {
                  // Render a 'react-scroll' Link for "Milestone"
                  return (
                    <Link
                      key="milestone"
                      to="ourVisionSection" // The 'id' of the Our Vision section
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="navbar-link"
                      style={{ cursor: "pointer" }}
                    >
                      {link}
                    </Link>
                  );
                } else if (link === "About") {
                  // Assuming you have a special case for "About" as well
                  return (
                    <Link
                      key="about"
                      to="aboutSection"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="navbar-link"
                      style={{ cursor: "pointer" }}
                    >
                      {link}
                    </Link>
                  );
                } else if (link === "Stakeholders") {
                  // Assuming you have a special case for "About" as well
                  return (
                    <Link
                      key="stakeholders"
                      to="Designation"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="navbar-link"
                      style={{ cursor: "pointer" }}
                    >
                      {link}
                    </Link>
                  );
                }
                
                else {
                  // Return other links as they were
                  return (
                    <NavLink key={link} href={`#${link.toLowerCase()}`}>
                      {link}
                    </NavLink>
                  );
                }
              })}

              {/* <Menu>
                <MenuButton as={Button}>Our Team</MenuButton>
                <MenuList>
                  <MenuItem onClick={onClose}>Head of Associate →</MenuItem>
                </MenuList>
              </Menu>
              <Link href="#contact" onClick={onClose}>
                Contact →
              </Link> */}
              <Menu>
                <MenuButton as={Button} rounded={"md"}>
                  Our Team <i class="arrow down"></i>
                </MenuButton>
                <MenuList color="#00B838" fontWeight={"400"}>
                  {OurTeamSubMenu.map((member) => (
                    <MenuItem onClick={gotoheadofassociates} key={member}>
                      {member}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
              <Link
            to="contactSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="contact-button"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#00B838",
              color: "white",
              marginTop: "4%",
              padding: "0 24px",
              height: "40px",
              borderRadius: "22px",
              cursor: "pointer",
            }}
          >
            Contact →
          </Link>


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
          {/* <Button
            bgColor="#00B838"
            color="white" // Assuming you want the text color to be white
            gap="10px"
            mt="5%"
            borderRadius="22px"
          >
            Contact →
          </Button> */}

          <Link
            to="contactSection"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="contact-button"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#00B838",
              color: "white",
              marginTop: "4%",
              padding: "0 24px",
              height: "40px",
              borderRadius: "22px",
              cursor: "pointer",
            }}
          >
            Contact →
          </Link>
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
