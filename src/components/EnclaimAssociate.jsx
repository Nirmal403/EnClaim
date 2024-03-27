import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import EnclaimAssociate from "../assests/என்Claim Associate.png";
import Associate from "../assests/13123595_5164516 1.png";

const EnclaimAssociates = () => {
  return (
    <Box bg="rgba(245, 245, 245, 1)">
      <Flex
        bg="rgba(245, 245, 245, 1)"
        direction={{ base: "column", md: "row" }} // Stack on mobile, row on desktop
        align="center" // Align items vertically in the center
        justify={{ base: "center", md: "space-between" }} // Center on mobile, space-between on desktop
        gap="4" // Spacing between items
        p={4}
        // border="1px solid red"
        mt={{ base: "5%", md: "2%" }} // Responsive margin-top
        w="80%" // Take the full width of the container
        margin="auto"
        // border="1px solid blue"
      >
        <Box width="100%" textAlign={"left"} alignContent={"left"}>
          <Image
            marginTop={"8%"}
            marginBottom={"4%"}
            src={EnclaimAssociate}
            alignContent="left"
          />
          <Text
            textAlign="left"
            color={"#808080"}
            fontFamily={"League Spartan"}
            fontSize="18px"
            fontWeight="400"
            lineHeight="22.68px"
            width="100%"
            // border="1px solid red"
          >
            Users comprise potential buyers who actively engage with the
            platform to earn cashback rewards. They participate by submitting
            their bills and inviting businesses to join the EnClaim network.
            These users are motivated by the opportunity to save money and
            maximize their purchasing power through cashback incentives offered
            by EnClaim.
          </Text>
        </Box>
        <Box
          width="100%"
          display="flex"
          justifyContent="flex-end"
          //   border="1px solid red"
        >
          <Image mt="8%" mb="4%" src={Associate} />
        </Box>
      </Flex>
        
      <Flex
        bg="#313131"
        direction={{ base: "column", md: "row" }} // Stack on mobile, row on desktop
        align="center" // Align items vertically in the center
        justify={{ base: "center", md: "space-between" }} // Center on mobile, space-between on desktop
        gap="4" // Spacing between items
        p={4}
        // border="1px solid red"
        borderRadius={"24px"}
        mt={{ base: "5%", md: "2%" }} // Responsive margin-top
        w="80%" // Take the full width of the container
        margin="auto"
        // border="1px solid blue"
      >
        
        <Box
          width={{ base: "100%", md: "33.3%" }}
          textAlign="left"
          p={{ base: "2", md: "4" }}
        >
              <Text 
                fontFamily="'League Spartan', sans-serif" // Ensure League Spartan is loaded in your project
                fontSize="22px"
                fontWeight="700"
                lineHeight="30.24px"
                textAlign="left"
                color="#BABABA"
              >How it works?</Text>
          <Text
            fontFamily="'League Spartan', sans-serif"
            fontSize={{ base: "24px", md: "48px" }} // Smaller font size on mobile
            fontWeight="700"
            lineHeight={{ base: "28px", md: "44.16px" }} // Adjusted line height for mobile
            textAlign="left"
            color="#007E26"
            p={{ base: "2", md: "4" }} // Smaller padding on mobile
          >
            01
          </Text>
          <Text
            fontFamily="'League Spartan', sans-serif" // Ensure League Spartan is loaded in your project
            fontSize="16px"
            fontWeight="700"
            lineHeight="14.72px"
            textAlign="left"
            color="#E2E2E2" // Added for better readability; adjust as needed
            p={1}
          >
           Build your circle
          </Text>
          <Text
            fontFamily="'League Spartan', sans-serif" // Make sure the font is imported and available
            fontSize="16px"
            fontWeight="400"
            lineHeight="20px"
            textAlign="left"
            color="#939393"
          >
            Identify potential users with a passion to earn passive income and build your circle.
          </Text>
        </Box>
        <Box
          width={{ base: "100%", md: "33.3%" }}
          textAlign="left"
          p={{ base: "2", md: "4" }}
        >
          <Text
            fontFamily="'League Spartan', sans-serif"
            fontSize={{ base: "24px", md: "48px" }} // Smaller font size on mobile
            fontWeight="700"
            lineHeight={{ base: "28px", md: "44.16px" }} // Adjusted line height for mobile
            textAlign="left"
            color="#007E26"
            p={{ base: "2", md: "4" }} // Smaller padding on mobile
          >
            02
          </Text>
          <Text
            fontFamily="'League Spartan', sans-serif" // Ensure League Spartan is loaded in your project
            fontSize="16px"
            fontWeight="700"
            lineHeight="14.72px"
            textAlign="left"
            color="#E2E2E2" // Added for better readability; adjust as needed
            p={1}
          >
            Achieve the milestones
          </Text>
          <Text
            fontFamily="'League Spartan', sans-serif" // Make sure the font is imported and available
            fontSize="16px"
            fontWeight="400"
            lineHeight="20px"
            textAlign="left"
            color="#939393"
          >
            Reach the milestones set by EnClaim to achieve the Associate Status.
          </Text>
        </Box>
        <Box
          width={{ base: "100%", md: "33.3%" }}
          textAlign="left"
          p={{ base: "2", md: "4" }}
        >
          <Text
            fontFamily="'League Spartan', sans-serif"
            fontSize={{ base: "24px", md: "48px" }} // Smaller font size on mobile
            fontWeight="700"
            lineHeight={{ base: "28px", md: "44.16px" }} // Adjusted line height for mobile
            textAlign="left"
            color="#007E26"
            p={{ base: "2", md: "4" }} // Smaller padding on mobile
          >
            03
          </Text>
          <Text
            fontFamily="'League Spartan', sans-serif" // Ensure League Spartan is loaded in your project
            fontSize="16px"
            fontWeight="700"
            lineHeight="14.72px"
            textAlign="left"
            color="#E2E2E2" // Added for better readability; adjust as needed
            p={1}
          >
            Earn passive income
          </Text>
          <Text
            fontFamily="'League Spartan', sans-serif" // Make sure the font is imported and available
            fontSize="16px"
            fontWeight="400"
            lineHeight="20px"
            textAlign="left"
            color="#939393"
          >
            Get EnClaim cashback on yours and the bills submitted by the users in your circle.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default EnclaimAssociates;
