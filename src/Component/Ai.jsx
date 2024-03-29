import React from "react";
import {
  Container,
  VStack,
  Input,
  Button,
  Text,
  Box,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { BsFillChatDotsFill } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";

export const Ai = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSendMessage = async () => {
    // Update messages with the user's input
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, sender: "user" },
    ]);

    try {
      // Make a request to your backend API
      const res = await axios.post(
        "https://mobile-banking-backend.onrender.com/chat",
        { input: input }
      );

      // Update messages with the response from the backend
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: res.data, sender: "Chatbot" },
      ]);
    } catch (error) {
      console.error("Error:", error);
      // Handle error if necessary
    }

    // Clear the input field
    setInput("");
  };

  return (
    <Container maxW="sm">
      <VStack spacing={4} align="flex-end">
        <IconButton
          icon={<BsFillChatDotsFill />}
          isRound
          size="lg"
          colorScheme="teal"
          bg="teal.500"
          _hover={{ bg: "teal.600" }}
          position="fixed"
          bottom="4"
          right="4"
          onClick={onOpen}
        />
      </VStack>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader
              borderBottomWidth="1px"
              textAlign="center"
              bg="teal.500"
              color="white"
            >
              AI Chat
              <DrawerCloseButton />
            </DrawerHeader>
            <DrawerBody>
              <Box
                p={4}
                borderWidth="1px"
                borderRadius="lg"
                h="300px"
                overflowY="scroll"
                bg="gray.100"
              >
                {messages?.map((message, index) => (
                  <Text
                    key={index}
                    color={message.sender === "user" ? "teal.500" : "gray.700"}
                    textAlign={message.sender === "user" ? "right" : "left"}
                  >
                    {message.text}
                  </Text>
                ))}
              </Box>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                mt={2}
              />
              <Button
                colorScheme="teal"
                mt={2}
                _hover={{ bg: "teal.600" }}
                onClick={handleSendMessage}
              >
                Send
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Container>
  );
};
