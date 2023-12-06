import React, { useState } from "react";
import useApi from "../hooks/useApi";
import CreateRoom from "./CreateRoom";
import MeetingCalendar from "./MeetingCalendar";
import BookingModal from "./BookingModal";

import {
  Box,
  Heading,
  Button,
  VStack,
  Text,
  Spinner,
  Alert,
  AlertIcon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
} from "@chakra-ui/react";

const MeetingRoom = () => {
  const { data: rooms, loading, error } = useApi("http://localhost:4000/rooms");
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100px"
      >
        <Spinner />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        Error: {error.message}
      </Alert>
    );
  }

  const renderTimeSlots = (bookings) => {
    return bookings.map((booking, index) => {
      const startTime = new Date(booking.startTime);
      const endTime = new Date(booking.endTime);

      const formattedStartTime = `${startTime.toLocaleDateString()} - Time :${startTime.toLocaleTimeString(
        [],
        { hour: "2-digit", minute: "2-digit" }
      )}`;
      const formattedEndTime = `${endTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}`;

      return (
        <Text key={index} fontSize="sm">
          Booked: {formattedStartTime} to {formattedEndTime}
        </Text>
      );
    });
  };

  // Transform room bookings into calendar events
  const events = rooms.reduce((acc, room) => {
    const roomEvents = room.bookings.map((booking) => ({
      title: `${room.name} - Booked`,
      start: new Date(booking.startTime),
      end: new Date(booking.endTime),
    }));
    return [...acc, ...roomEvents];
  }, []);

  return (
    <VStack spacing={4} align="stretch" p={20}>
      <Heading as="h1" size="xl" mb={4} color="teal.500">
        Meeting Rooms
      </Heading>
      <Accordion allowToggle defaultIndex={[0]} width="100%" boxShadow="md">
        {rooms.map((room) => (
          <AccordionItem key={room.id}>
            <AccordionButton
              _expanded={{ bg: "blue.100", color: "white" }}
              _hover={{ bg: "teal.200" }}
            >
              <Box flex="1" textAlign="left">
                {room.name}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              {renderTimeSlots(room.bookings)}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      <CreateRoom />
      <Box w="full">
        <MeetingCalendar events={events} />
      </Box>
      <Flex justify="center" height="50%">
        <Button
          onClick={() => setIsBookingModalOpen(true)}
          colorScheme="teal"
          size="lg"
          borderRadius="full"
          width="800px"
        >
          Book New Slot
        </Button>
      </Flex>
      <BookingModal
        rooms={rooms}
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </VStack>
  );
};

export default MeetingRoom;
