import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  useToast
} from "@chakra-ui/react";

const BookingModal = ({ rooms, isOpen, onClose }) => {
  const [bookingData, setBookingData] = useState({
    roomId: '',
    date: '',
    startTime: '',
    endTime: ''
  });
  const toast = useToast();

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    try {
      const startDateTime = `${bookingData.date}T${bookingData.startTime}:00`;
      const endDateTime = `${bookingData.date}T${bookingData.endTime}:00`;

      const response = await fetch("http://localhost:4000/book-room", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          roomId: parseInt(bookingData.roomId),
          startTime: startDateTime,
          endTime: endDateTime,
          userId: 1 // Hardcoded user ID for now
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      toast({
        title: "Booking successful",
        description: "The time slot has been booked.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      onClose(); // Close the modal
      setBookingData({ roomId: '', date: '', startTime: '', endTime: '' }); // Reset the form
    } catch (error) {
      toast({
        title: "Error in booking",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Book a Meeting Room</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleBookingSubmit}>
          <ModalBody>
            <FormControl id="room" mb={4} isRequired>
              <FormLabel>Room</FormLabel>
              <Select placeholder="Select room" onChange={(e) => setBookingData({ ...bookingData, roomId: e.target.value })}>
                {rooms.map(room => (
                  <option key={room.id} value={room.id}>{room.name}</option>
                ))}
              </Select>
            </FormControl>
            <FormControl id="date" mb={4} isRequired>
              <FormLabel>Date</FormLabel>
              <Input type="date" onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })} />
            </FormControl>
            <FormControl id="startTime" mb={4} isRequired>
              <FormLabel>Start Time</FormLabel>
              <Input type="time" onChange={(e) => setBookingData({ ...bookingData, startTime: e.target.value })} />
            </FormControl>
            <FormControl id="endTime" isRequired>
              <FormLabel>End Time</FormLabel>
              <Input type="time" onChange={(e) => setBookingData({ ...bookingData, endTime: e.target.value })} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} type="submit">
              Book Room
            </Button>
            <Button variant="ghost" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default BookingModal;
