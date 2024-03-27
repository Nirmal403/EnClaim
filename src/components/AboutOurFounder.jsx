import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import AboutOuFounder from "../assests/About our Founder.png";
import FounderProfPic from "../assests/Group 48096748.png";

const AboutOurFounder = () => {
  return (
    <Box marginTop="5%">
      <Image
        marginTop={"8%"}
        src={AboutOuFounder}
        alignContent="center"
        margin="auto"
      />
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
        <Box width="100%" textAlign={"left"} alignContent={"left"}>
          <Image
            marginTop={"8%"}
            src={FounderProfPic}
            alignContent="center"
            margin="auto"
          />
        </Box>
        <Box width="100%">
          <Text
            textAlign="left"
            color={"rgba(128, 128, 128, 1)"}
            fontFamily={"League Spartan"}
            fontSize="19px"
            fontWeight="400"
            lineHeight={"24.68px"}
            width="100%"
            // border="1px solid red"
          >
            Mr. Subash Kulandhiavel has a vision for aiding local businesses.
            Among the digital marketing trend, his extensive business ownership
            experience demonstrates the effectiveness of his strategies in the
            evolving marketing landscape. ENCLAIM stands out due to his
            unwavering dedication to fostering personal connections, ensuring
            our approach resonates with both clients and customers.
          </Text>

          <Text
          marginTop='5%'
            fontFamily="Recoleta Alt" // Ensure this font is loaded in your project
            fontSize="24px"
            fontWeight="700"
            lineHeight="32.64px"
            textAlign="left"
          >
            Subash Kulandhaivel
          </Text>
          <Text fontFamily={"League Spartan"} // Ensure this font is loaded in your project
            fontSize="16px"
            fontWeight="400"
            lineHeight="26px"
            textAlign="left"
            color='rgba(132, 132, 132, 1)'>
            Founder & Director, Enclaim Marketing Pvt. Ltd.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutOurFounder;
