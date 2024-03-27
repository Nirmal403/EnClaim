import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import EnclaimUser from "../assests/என்Claim User.png";
import User from "../assests/Receipt-rafiki 1.png";

const EnclaimUsers = () => {
  return (
    <Box bg="white">
      <Flex
        bg="white"
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
            src={EnclaimUser}
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
          <Image mt="8%" mb="4%" src={User} />
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
            Register as an EC User
          </Text>
          <Text
            fontFamily="'League Spartan', sans-serif" // Make sure the font is imported and available
            fontSize="16px"
            fontWeight="400"
            lineHeight="20px"
            textAlign="left"
            color="#939393"
          >
            Complete the free registration process and activate the user account
            by submitting any bills/invoices worth Rs.100.
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
            Upload your latest bill
          </Text>
          <Text
            fontFamily="'League Spartan', sans-serif" // Make sure the font is imported and available
            fontSize="16px"
            fontWeight="400"
            lineHeight="20px"
            textAlign="left"
            color="#939393"
          >
            Users can submit any valid Indian bills/invoices within 7 days of
            purchase to avail EnClaim cashback or reward.
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
            Earn cashback on approved bills
          </Text>
          <Text
            fontFamily="'League Spartan', sans-serif" // Make sure the font is imported and available
            fontSize="16px"
            fontWeight="400"
            lineHeight="20px"
            textAlign="left"
            color="#939393"
          >
            Earn cashback after the approval process from both partner and
            EnClaim. Cashbacks are settled to bank account within 15th of every
            month.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default EnclaimUsers;
