import React from 'react';
import {
    Box,
    Flex,
    Image,
    Text,
  } from "@chakra-ui/react";
  import Redefining from "../assests/Redefining Marketing with Authenticity and Impact.png";

const About = () => {
  return (
    <Flex
        bg="white"
        direction={{ base: "column", md: "row" }} // Stack on mobile, row on desktop
        align="center" // Align items vertically in the center
        justify={{ base: "center", md: "space-between" }} // Center on mobile, space-between on desktop
        gap="4" // Spacing between items
        p={4}
        mt={{ base: "5%", md: "2%" }} // Responsive margin-top
        w="80%" // Take the full width of the container
        margin="auto"
        // border="1px solid blue"
      >
        
        <Box  width="100%"  textAlign={"left"}
            alignContent={'left'}>
        <Text
            // width="37px"
            color='rgba(0, 184, 56, 1)'
            height="10px"
            position="absolute"
            bg="#dbf6ee"
            fontFamily={"League Spartan"}
            fontSize="12px"
            fontWeight="500"
            lineHeight="10px"
            textAlign={"left"}
            alignContent={'left'}
            // border='1px solid green'
          >
            ABOUT
          </Text>
          <Image marginTop={'8%'} src={Redefining} alignContent='left'/>
        </Box>
        <Box width="100%" >
          <Text
            textAlign="left"
            color={"rgba(128, 128, 128, 1)"}
            fontFamily={"League Spartan"}
            fontSize="20px"
            fontWeight="400"
            lineHeight="22.68px"
            width='100%'
            // border="1px solid red"
          >
            We're dedicated partners in your business's success. Through the
            power of genuine human connection, we drive lead generation and
            cultivate lasting relationships within the community. In today's
            digital age, our belief in the value of personal interaction and
            word-of-mouth referrals sets us apart.
            <br />
            We prioritize building strong, memorable relationships with both
            clients and customers, ensuring every interaction leaves a lasting
            impression. Trust ENCLAIM to elevate your business to new heights
            through authentic, effective marketing strategies.
          </Text>
        </Box>
      </Flex>
  )
}

export default About