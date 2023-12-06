import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
  useToast,
  Spinner,
} from "@chakra-ui/react";

const CreateRoom = () => {
  const [roomName, setRoomName] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:4000/rooms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: roomName }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      toast({
        title: "Room created successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      setRoomName("");
    } catch (error) {
      toast({
        title: "Error creating room",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100px"
      >
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: "300px", margin: "0 auto" }}>
      <FormControl id="roomName" isRequired>
        <FormLabel style={{ fontSize: "20px" }}>Room Name</FormLabel>
        <Input
          type="text"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          placeholder="Enter room name"
        />
      </FormControl>
      <Button
        mt={4}
        colorScheme="blue"
        type="submit"
        isLoading={loading}
        loadingText="Creating"
      >
        Create Room
      </Button>
      {loading && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100px"
        >
          <Spinner size="xl" />
        </Box>
      )}
    </form>
  );
};

export default CreateRoom;
