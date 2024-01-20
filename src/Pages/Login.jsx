import React from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Link,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { UserLogin } from "../Redux/UserReducer/action";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(UserLogin({ email: email, password: password })).then(() => {
      navigate("/account");
    });
  };

  return (
    <Div>
      <Flex align="center" justify="center" minHeight="92.9vh">
        <Box
          width="400px"
          p={8}
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          bg={"white"}
        >
          <Heading mb={4}>Login</Heading>
          <form onSubmit={handleSubmit}>
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
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button type="submit" colorScheme="teal" width="full">
              Sign in
            </Button>
          </form>
          <Text mt={4}>
            Don't have an account?{" "}
            <Link onClick={() => navigate("/signup")} color="teal.500">
              Sign up here
            </Link>
          </Text>
        </Box>
      </Flex>
    </Div>
  );
};

const Div = styled.div`
  background-image: url("https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=2757&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
`;
