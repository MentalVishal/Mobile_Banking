import React from "react";
import {
  Box,
  Container,
  Heading,
  VStack,
  Input,
  Button,
  Flex,
  IconButton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Component/Footer";

export const Withdraw = () => {
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [description, setDescription] = useState("");
  const [otp, setOtp] = useState("");

  const balance = 99990;

  const handleWithdrawal = () => {
    // Add logic to handle the withdrawal
    console.log("Withdrawal amount:", withdrawalAmount);
    console.log("OTP:", otp);
  };

  const navigate = useNavigate();

  return (
    <div>
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
            Withdraw Money
          </Heading>
          <Spacer />
        </Flex>

        <Box
          p={8}
          borderWidth="1px"
          borderRadius="xl"
          boxShadow="xl"
          bg="white"
        >
          <VStack spacing={6} align="stretch">
            <Text fontSize="xl" fontWeight="semibold" color="teal.500">
              Available Balance
            </Text>
            <Text fontSize="2xl" fontWeight="bold" color="teal.500">
              ₹ {balance}
            </Text>
            <Input
              placeholder="Enter withdrawal amount"
              size="md"
              value={withdrawalAmount}
              onChange={(e) => setWithdrawalAmount(e.target.value)}
              bg="gray.100"
              focusBorderColor="teal.500"
            />
            <Input
              placeholder="Description"
              size="md"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              bg="gray.100"
              focusBorderColor="teal.500"
            />
            <Input
              placeholder="Enter Your Pin"
              size="md"
              type="password"
              maxLength="4"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              bg="gray.100"
              focusBorderColor="teal.500"
            />
            <Button
              colorScheme="teal"
              size="lg"
              onClick={handleWithdrawal}
              _hover={{ bg: "teal.600" }}
            >
              Withdraw
            </Button>
          </VStack>
        </Box>
        <Text m={6} fontSize="sm" textAlign="center" color="gray.500">
          © 2024 Your Bank. All rights reserved.
        </Text>
      </Container>
      <br />

      <Footer />
    </div>
  );
};
