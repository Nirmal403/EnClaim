import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import EnclaimPartner from "../assests/என்Claim Partner.png";
import Partner from "../assests/Partners.png";

const EnclaimPartners = () => {
  return (
    <Box bg="rgba(245, 245, 245, 1)" >
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
            src={EnclaimPartner}
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
            Partners are businesses seeking to fulfill their marketing needs by
            leveraging EnClaim's strategic marketing solutions. They aim to
            enhance their visibility, attract potential customers, and cultivate
            a loyal customer base through targeted marketing campaigns
            facilitated by EnClaim.
          </Text>
        </Box>
        <Box
          width="100%"
          display="flex"
          justifyContent="flex-end"
          //   border="1px solid red"
        >
          <Image mt="8%" mb="4%" src={Partner} />
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
        borderRadius={'24px'}
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
            என்Claim Partnership Registration
          </Text>
          <Text
            fontFamily="'League Spartan', sans-serif" // Make sure the font is imported and available
            fontSize="16px"
            fontWeight="400"
            lineHeight="20px"
            textAlign="left"
            color="#939393"
          >
            Businesses are required to register as EnClaim partners to list
            offers for their products and services based on the agreed
            conditions.
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
            Verify and Approve User Bills
          </Text>
          <Text
            fontFamily="'League Spartan', sans-serif" // Make sure the font is imported and available
            fontSize="16px"
            fontWeight="400"
            lineHeight="20px"
            textAlign="left"
            color="#939393"
          >
            Partners must verify and approve user bills within 30 days of
            submission in compliance with the established guidelines and
            policies.
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
            Make Payments to என்Claim
          </Text>
          <Text
            fontFamily="'League Spartan', sans-serif" // Make sure the font is imported and available
            fontSize="16px"
            fontWeight="400"
            lineHeight="20px"
            textAlign="left"
            color="#939393"
          >
            Partners are responsible for clearing the accumulated amount for
            bill submissions within the specified timeline (Within 5th of every
            month).
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default EnclaimPartners;
