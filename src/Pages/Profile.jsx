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
import { useDispatch, useSelector } from "react-redux";
import { Pin_update } from "../Redux/UserReducer/action";
import { toast } from "react-toastify";

export const Profile = () => {
  const [isEditingPin, setIsEditingPin] = useState(false);
  const [newPin, setNewPin] = useState("");
  const dispatch = useDispatch();

  const name = useSelector((store) => store.userReducer.name);
  const email = useSelector((store) => store.userReducer.email);
  const mobile = useSelector((store) => store.userReducer.mobile);
  const balance = useSelector((store) => store.userReducer.balance);
  const pin = useSelector((store) => store.userReducer.pin);

  const token = useSelector((store) => store.userReducer.token);

  const handlePinUpdate = async () => {
    if (newPin.length !== 4) {
      toast.warn("Pin length should be 4");
      setNewPin("");
    } else {
      await dispatch(Pin_update({ updatePin: newPin, token }));
      // Add logic to update the PIN here
      console.log("Updating PIN:", newPin);
      setIsEditingPin(false);
    }
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
                  name={name}
                  src="/profile-picture.jpg"
                  mb={4}
                />

                <Heading fontSize="2xl" mb={2}>
                  {name}
                </Heading>

                <Badge colorScheme="teal" fontSize="sm" mb={4}>
                  Premium Member
                </Badge>

                <Divider mb={4} />

                <VStack spacing={2} align="start">
                  <Text>
                    <strong>Balance:</strong> ₹ {balance}
                  </Text>
                  <Text>
                    <strong>Email:</strong> {email}
                  </Text>
                  <Text>
                    <strong>Phone:</strong> +91 {mobile}
                  </Text>
                  <Text>
                    <strong>Pin:</strong> {pin}
                  </Text>
                  <Text>
                    <strong>Location:</strong> India
                  </Text>
                </VStack>

                {isEditingPin ? (
                  <FormControl mt={4}>
                    <FormLabel>New PIN</FormLabel>
                    <Input
                      placeholder="Enter your 4-digit New PIN"
                      size="lg"
                      type="number"
                      value={newPin}
                      onChange={(e) => {
                        setNewPin(e.target.value.slice(0, 4)); // Limit to 4 characters
                      }}
                      maxLength={4} // Maximum length
                      bg="gray.100"
                      focusBorderColor="teal.500"
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
