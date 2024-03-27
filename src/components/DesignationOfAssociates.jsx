import React from 'react';
import { Box, Flex, Text, UnorderedList, ListItem, Container, useColorModeValue } from '@chakra-ui/react';
import Ellipse from '../assests/Ellipse 2.png'
import { Global, css } from '@emotion/react';

const DesignationsofAssociates = () => {
  const cardBg = useColorModeValue('white', 'gray.700'); // For light or dark mode
  
  const GlobalStyles = () => (
    <Global
      styles={css`
        .custom-list-item::marker {
          color: green; // This sets the bullet color to green
        }
      `}
    />
  );

  return (
    <Container maxW="container.xl" centerContent py={12} bg='rgba(245, 245, 245, 1)'>
      <Text fontSize="36px" fontWeight="700" lineHeight="33.12px" textAlign="center" bg="rgba(245, 245, 245, 1)" color="#333333" mb={10}>
        Designations of Associate
      </Text>
      <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" width="full">
        {/* Associate Card */}
        <Box bg={cardBg} p={6} borderRadius="xl" m={2} shadow="md" flex="1" textAlign="left">
          <Text fontSize="24px" fontWeight="bold" color="#333333" mb={4}>Associate</Text>
          <Text mb={4}>A potential person with the responsibility to refer potential associates to the organization.</Text>
          <GlobalStyles />
         <UnorderedList>
            <ListItem className="custom-list-item">Stay connected with your 2/6 circle</ListItem>
            <ListItem className="custom-list-item">Take responsibility for submitting bills worth 1Cr+ / annum from your circle</ListItem>
            <ListItem className="custom-list-item">Expand your circle of Users, Associates & Partners by 3x</ListItem>
          </UnorderedList>
        </Box>

        {/* Sr. Associate Card */}
        <Box bg={cardBg} p={6} borderRadius="xl" m={2} shadow="md" flex="1" textAlign="left">
          <Text fontSize="24px" fontWeight="bold" color="#333333" mb={4}>Sr. Associate</Text>
          <Text mb={4}>Holds a greater level of responsibility in expanding the network.</Text>
          <UnorderedList>
            <ListItem className="custom-list-item">Stay connected with your 4/6 circle</ListItem>
            <ListItem className="custom-list-item">Take responsibility for submitting bills worth 50Cr+ / annum from your circle</ListItem>
            <ListItem className="custom-list-item">Expand your circle of Users, Associates & Partners by 2x</ListItem>
          </UnorderedList>
        </Box>

        {/* Head of Associate Card */}
        <Box bg={cardBg} p={6} borderRadius="xl" m={2} shadow="md" flex="1" textAlign="left">
          <Text fontSize="24px" fontWeight="bold" color="#333333" mb={4}>Head of Associate</Text>
          <Text mb={4}>A leader with a strategic vision in driving the growth and maximizing the potential of the organization.</Text>
          <UnorderedList>
            <ListItem className="custom-list-item">Stay connected with your 6/6 circle</ListItem>
            <ListItem className="custom-list-item">Take responsibility for submitting bills worth 500Cr+ / annum from your circle</ListItem>
            <ListItem className="custom-list-item">Provide training and support to elevate the associates in your circle</ListItem>
          </UnorderedList>
        </Box>
      </Flex>
    </Container>
  );
};

export default DesignationsofAssociates;
