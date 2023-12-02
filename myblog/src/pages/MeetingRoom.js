import React, { useState } from "react";
import useApi from "../hooks/useApi";
import CreateRoom from "./CreateRoom";
import MeetingCalendar from './MeetingCalendar';
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
  AccordionIcon
} from "@chakra-ui/react";

const MeetingRoom = () => {
  const { data: rooms, loading, error } = useApi("http://localhost:4000/rooms");
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100px">
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
    return bookings.map((booking, index) => (
      <Text key={index} fontSize="sm">
        Booked: {booking.startTime} to {booking.endTime}
      </Text>
    ));
  };

  // Transform room bookings into calendar events
  const events = rooms.reduce((acc, room) => {
    const roomEvents = room.bookings.map(booking => ({
      title: `${room.name} - Booked`,
      start: new Date(booking.startTime),
      end: new Date(booking.endTime)
    }));
    return [...acc, ...roomEvents];
  }, []);

  return (
    <VStack spacing={4} align="stretch">
      <Heading as="h1" size="xl" mb={4}>Meeting Rooms</Heading>
      <Accordion allowToggle defaultIndex={[0]} width="100%">
        {rooms.map((room) => (
          <AccordionItem key={room.id}>
            <AccordionButton _expanded={{ bg: 'blue.100' }}>
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
      <Button onClick={() => setIsBookingModalOpen(true)} colorScheme="teal" size="md">Book a New Slot</Button>
      <BookingModal
        rooms={rooms}
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </VStack>

  );
};

export default MeetingRoom;
