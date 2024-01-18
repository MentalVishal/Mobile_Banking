import React from "react";
import {
  Select,
  Box,
  Container,
  Heading,
  VStack,
  Input,
  Button,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { FaArrowLeft, FaMoneyBill } from "react-icons/fa";
import { useState } from "react";
import { Footer } from "../Component/Footer";
import { useNavigate } from "react-router-dom";

export const Deposit = () => {
  const [depositAmount, setDepositAmount] = useState("");
  const [transactionType, setTransactionType] = useState("cash");
  const [pin, setPin] = useState("");
  const [description, setDescription] = useState("");
  const [pinError, setPinError] = useState("");

  const handleDeposit = () => {
    // Validate the PIN before processing the deposit
    if (pin.length !== 4) {
      setPinError("PIN must be 4 digits");
      return;
    }

    // Reset PIN error and proceed with deposit logic
    setPinError("");
    console.log("Deposit amount:", depositAmount);
    console.log("Transaction type:", transactionType);
    console.log("PIN:", pin);
  };

  const navigate = useNavigate();

  return (
    <div>
      <Box
        color="linear(to-r, teal.400, teal.600)"
        py={4}
        px={{ base: 4, md: 8 }}
      >
        <Container maxW="lg">
          <Box display="flex" alignItems="center">
            <IconButton
              icon={<FaArrowLeft />}
              isRound
              size="md"
              fontSize="lg"
              color="white"
              bg={"teal.400"}
              _hover={{ bg: "teal.700" }}
              onClick={() => navigate("/account")}
            />
            <Heading ml={4} size="lg">
              Deposit Money
            </Heading>
          </Box>
        </Container>
      </Box>

      <Container maxW="lg" mt={8}>
        <Box
          p={8}
          borderWidth="1px"
          borderRadius="xl"
          boxShadow="md"
          bg="white"
          transition="box-shadow 0.3s ease-in-out"
          _hover={{ boxShadow: "lg" }}
        >
          <VStack spacing={6} align="stretch">
            <Text fontSize="xl" fontWeight="semibold" color="teal.500">
              Select an Account
            </Text>
            {/* Add a dropdown or any account selection component here */}
            <Input
              placeholder="Enter deposit amount"
              size="lg"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              bg="gray.100"
              focusBorderColor="teal.500"
            />
            <Select
              placeholder="Select transaction type"
              size="lg"
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
              bg="gray.100"
              focusBorderColor="teal.500"
            >
              <option value="cash">Cash</option>
              <option value="cheque">Cheque</option>
              <option value="upi">UPI</option>
            </Select>
            <Input
              placeholder="Description"
              size="lg"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              bg="gray.100"
              focusBorderColor="teal.500"
            />
            <Input
              placeholder="Enter your 4-digit PIN"
              size="lg"
              type="password"
              value={pin}
              onChange={(e) => {
                setPin(e.target.value.slice(0, 4)); // Limit to 4 characters
                setPinError("");
              }}
              maxLength={4} // Maximum length
              bg="gray.100"
              focusBorderColor="teal.500"
              isInvalid={pinError !== ""}
            />
            {pinError && (
              <Text color="red.500" fontSize="sm" textAlign="left">
                {pinError}
              </Text>
            )}
            <Button
              colorScheme="teal"
              size="lg"
              onClick={handleDeposit}
              _hover={{ bg: "teal.600" }}
              leftIcon={<FaMoneyBill />}
            >
              Deposit
            </Button>
          </VStack>
        </Box>
        <Text m={6} fontSize="sm" textAlign="center" color="gray.500">
          © 2024 Your Bank. All rights reserved.
        </Text>
      </Container>

      <Footer />
    </div>
  );
};
