import React from "react";
import { useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  Text,
  Heading,
  Badge,
  Divider,
  VStack,
  Button,
  Input,
  FormControl,
  FormLabel,
  IconButton,
  Spacer,
  Container,
} from "@chakra-ui/react";
import { Sidebar } from "../Component/Sidebar";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export const Profile = () => {
  const [isEditingPin, setIsEditingPin] = useState(false);
  const [newPin, setNewPin] = useState("");

  const handlePinUpdate = () => {
    // Add logic to update the PIN here
    console.log("Updating PIN:", newPin);
    setIsEditingPin(false);
  };

  const navigate = useNavigate();

  return (
    <div>
      <Flex direction="column" minHeight="92.9vh">
        <Flex direction={["column", "column", "row"]} flex="1">
          <Sidebar />

          <Container maxW="lg" mt={8}>
            <Flex align="center" mb={4}>
              <IconButton
                icon={<FaArrowLeft />}
                isRound
                size="lg"
                colorScheme="teal"
                onClick={() => navigate("/account")}
              />
              <Heading ml={4} size="lg">
                Profile
              </Heading>
              <Spacer />
            </Flex>

            <Box
              maxW="md"
              w={"100%"}
              p={6}
              borderWidth={1}
              borderRadius="md"
              boxShadow="md"
              m={"auto"}
            >
              <Flex align="center" justify="center" direction="column">
                <Avatar
                  size="xl"
                  name="John Doe"
                  src="/profile-picture.jpg"
                  mb={4}
                />

                <Heading fontSize="2xl" mb={2}>
                  John Doe
                </Heading>

                <Badge colorScheme="teal" fontSize="sm" mb={4}>
                  Premium Member
                </Badge>

                <Divider mb={4} />

                <VStack spacing={2} align="start">
                  <Text>
                    <strong>Email:</strong> john.doe@example.com
                  </Text>
                  <Text>
                    <strong>Phone:</strong> (555) 555-5555
                  </Text>
                  <Text>
                    <strong>Location:</strong> City, Country
                  </Text>
                  <Text>
                    <strong>Balance:</strong> $10,000
                  </Text>
                </VStack>

                {isEditingPin ? (
                  <FormControl mt={4}>
                    <FormLabel>New PIN</FormLabel>
                    <Input
                      type="password"
                      placeholder="Enter new PIN"
                      value={newPin}
                      onChange={(e) => setNewPin(e.target.value)}
                    />
                    <Button mt={2} colorScheme="teal" onClick={handlePinUpdate}>
                      Update PIN
                    </Button>
                  </FormControl>
                ) : (
                  <Button
                    mt={4}
                    colorScheme="teal"
                    onClick={() => setIsEditingPin(true)}
                  >
                    Update PIN
                  </Button>
                )}
              </Flex>
            </Box>
          </Container>
        </Flex>
      </Flex>
    </div>
  );
};
