import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
  Heading,
} from "@chakra-ui/react";

const login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);

    if (!name || !email) {
      console.error("Name and email are required.");
      return;
    }

    try {
      const response = await fetch("https://sample-api.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log("Authentication successful!");
    } catch (error) {
      console.error("Error during authentication:", error);
    }
  };

  return (
    <Box maxW="md" mx="auto" mt="20">
      <Heading mb="4">Login</Heading>
      <form onSubmit={handleLogin}>
        <FormControl id="name" isRequired>
          <FormLabel>Full Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Full Name"
          />
        </FormControl>
        <FormControl id="email" mt="4" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </FormControl>
        <Button mt="4" colorScheme="blue" type="submit">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default login;
