import React from 'react';
import { Box, Container, Stack, Text, Link, useColorModeValue, Image, useBreakpointValue } from '@chakra-ui/react';
import FooterLogo from "../assests/FooterLogo.png";

const Footer = () => {
  const linkStyle = {
    fontFamily: 'League Spartan',
    fontSize: '18px',
    fontWeight: '800',
    lineHeight: '18px',
    textAlign: 'left',
    color: '#313131',
  };

  const privacy = {
    fontFamily: 'League Spartan',
    fontSize: '18px',
    fontWeight: '500',
    lineHeight: '18px',
    textAlign: 'center',
    color: '#A7A7A7',
  };

  // Use a breakpoint value to dynamically adjust the direction of the stack for links
  const direction = useBreakpointValue({ base: 'column', md: 'row' });

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
    //   border='1px solid red'
      width='80%'
      margin='auto'
      color={useColorModeValue('gray.700', 'gray.200')}>
        <Image margin='auto' src={FooterLogo} />
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        {/* Main links excluding "Our Team" */}
        <Stack direction={direction} spacing={6}>
          <Link href={'#'} style={linkStyle}>Home</Link>
          <Link href={'#'} style={linkStyle}>About</Link>
          <Link href={'#'} style={linkStyle}>Stakeholders</Link>
          <Link href={'#'} style={linkStyle}>Milestone</Link>
          {/* Conditionally render "Our Team" link based on the breakpoint */}
          {direction === 'column' && <Link href={'#'} style={linkStyle}>Our Team</Link>}
        </Stack>
        {/* Render "Our Team" link separately for non-column layout */}
        {direction !== 'column' && (
          <Link href={'#'} style={linkStyle}>Our Team</Link>
        )}
      </Container>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        <Stack direction={'row'} spacing={6}>
          <Link href={'#'} style={privacy}>Privacy Policy</Link>
          <Link href={'#'} style={privacy}>Terms & Conditions</Link>
        </Stack>
      </Container>
      
      <Box borderTopWidth={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'center' }}
          align={{ base: 'center', md: 'center' }}>
          <Text style={privacy}>© {new Date().getFullYear()} SmartClaim, All Rights Reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;