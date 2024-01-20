import React from "react";
import { useState } from "react";
import { PinInput, PinInputField, HStack } from "@chakra-ui/react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { UserSignup } from "../Redux/UserReducer/action";
import { toast } from "react-toastify";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [openingBalance, setOpeningBalance] = useState("");
  const [pin, setPin] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      mobile: mobile,
      password: password,
      balance: openingBalance,
      pin: pin,
    };
    if (name === "") {
      toast.error("Enter your Name");
    } else if (email === "") {
      toast.error("Enter your Email");
    } else if (mobile === "") {
      toast.error("Enter your Mobile no.");
    } else if (password === "") {
      toast.error("Enter your Password");
    } else if (openingBalance === "") {
      toast.error("Enter your Opening Balance");
    } else if (pin === "" || pin.length !== 4) {
      toast.error("Create Your Pin");
    } else {
      dispatch(UserSignup(data)).then((res) => {
        navigate("/login");
      });
    }

    dispatch(UserSignup(data)).then((res) => {
      navigate("/login");
    });
  };
  return (
    <Div>
      <Flex align="center" justify="center" minHeight="92.9vh">
        <Box
          width="600px"
          p={8}
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          bg={"white"}
        >
          <Heading mb={4}>Sign Up</Heading>
          <form onSubmit={handleSubmit}>
            <FormControl mb={4}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Mobile Number</FormLabel>
              <Input
                type="number"
                placeholder="Enter your Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Opening Balance</FormLabel>
              <Input
                type="number"
                placeholder="Enter opening balance"
                value={openingBalance}
                onChange={(e) => setOpeningBalance(e.target.value)}
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Create PIN</FormLabel>
              <HStack>
                <PinInput onChange={(e) => setPin(e)} type="number">
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
              </HStack>
            </FormControl>
            <Button type="submit" colorScheme="teal" width="full" mb={4}>
              Sign up
            </Button>
          </form>
          <Text mt={4} textAlign="center">
            Already have an account?{" "}
            <Text
              as="span"
              color="teal.500"
              cursor={"pointer"}
              onClick={() => navigate("/login")}
            >
              Log in here
            </Text>
          </Text>
        </Box>
      </Flex>
    </Div>
  );
};

const Div = styled.div`
  background-image: url("https://imgs.search.brave.com/9AiOCbZs32UENIYdA5UHyiPlxwhI2RQ4KduEtDAqljo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdC5k/ZXBvc2l0cGhvdG9z/LmNvbS8yMjI4MzQw/LzIzODkvaS80NTAv/ZGVwb3NpdHBob3Rv/c18yMzg5ODM4OS1z/dG9jay1waG90by1v/bmxpbmUtYmFua2lu/Zy5qcGc");
  background-size: cover;
`;
