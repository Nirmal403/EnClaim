import { Box, VStack, Text, Circle, Stack } from "@chakra-ui/react";

const TimelineEvent = ({ date, title, isLast }) => {
  return (
    <Stack direction={{ base: "row", md: "column" }} spacing={4} align="start">
      <Circle
        size={{ base: "15px", md: "20px" }}
        bg="white"
        alignSelf="start"
      />
      <Box flex="1" pl={{ base: 4, md: 0 }}>
        <Text
          fontSize={{ base: "xs", md: "sm" }}
          color="white"
          fontWeight="bold"
        >
          {date}
        </Text>
        <Text fontSize={{ base: "sm", md: "sm" }} color="white">
          {title}
        </Text>
        {!isLast && (
          <Box
            position="absolute"
            left={{ base: "8px", md: "50%" }}
            top={{ base: "25px", md: "100%" }}
            transform={{ base: "translate(0, -50%)", md: "translate(-50%, 0)" }}
            width={{ base: "2px", md: "1px" }}
            height={{ base: "auto", md: "100%" }}
            bg="white"
            zIndex="-1"
          />
        )}
      </Box>
    </Stack>
  );
};

const TheTimeline = () => {
  const events = [
    { date: "2022", title: "Idea Validation", isDashed: false },
    { date: "2023", title: "Research & Development", isDashed: false },
    { date: "2024 Feb", title: "Incorporated", isDashed: true },
    { date: "2024 Feb", title: "App Design", isDashed: true },
    { date: "2024 Mar", title: "App Development", isDashed: false },
    { date: "2024 May", title: "App Launch", isDashed: false, isLast: true },
  ];

  return (
    <VStack
      bg="#00b838"
      p={{ base: 4, md: 10 }}
      spacing={{ base: 4, md: 5 }}
      align="center"
      width={{ base: "90%", md: "80%" }}
      margin="auto"
    >
      <Text
        color="white"
        fontSize={{ base: "2xl", md: "24px" }}
        fontWeight="700"
        fontFamily={"Recoleta Alt"}
        lineHeight={{ base: "24px", md: "32.64px" }}
      >
        The Timeline of என்Claim
      </Text>
      <Stack
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        position="relative"
        w="full"
        spacing={{ base: 4, md: 0 }}
      >
        {events.map((event, index) => (
          <TimelineEvent
            key={index}
            date={event.date}
            title={event.title}
            isLast={event.isLast}
            isDashed={event.isDashed}
          />
        ))}
      </Stack>
    </VStack>
  );
};

export default TheTimeline;
