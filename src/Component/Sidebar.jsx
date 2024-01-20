import React from "react";
import { Box, Text, VStack, HStack, Heading, Icon } from "@chakra-ui/react";
import { FaUser, FaDollarSign, FaChartPie, FaHistory } from "react-icons/fa";
import { RiLogoutBoxFill } from "react-icons/ri";
import { MdOutlineAccountBalance } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Logout } from "../Redux/UserReducer/action";

export const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handelLogout = () => {
    dispatch(Logout());
  };

  return (
    <Box
      w={["100%", "100%", "250px"]}
      bg="teal.800"
      p={4}
      color="white"
      boxShadow={["none", "none", "lg"]}
    >
      <VStack align="start" spacing={4}>
        <Heading size="md">My Account</Heading>
        <HStack
          spacing={2}
          cursor={"pointer"}
          _hover={{ color: "#CEC12F" }}
          onClick={() => navigate("/account")}
        >
          <Icon as={MdOutlineAccountBalance} />
          <Text>My Balance</Text>
        </HStack>
        <HStack
          spacing={2}
          cursor={"pointer"}
          _hover={{ color: "#CEC12F" }}
          onClick={() => navigate("/profile")}
        >
          <Icon as={FaUser} />
          <Text>Profile</Text>
        </HStack>
        <HStack
          spacing={2}
          cursor={"pointer"}
          _hover={{ color: "#CEC12F" }}
          onClick={() => navigate("/transaction")}
        >
          <Icon as={FaDollarSign} />
          <Text>Transactions</Text>
        </HStack>
        <HStack spacing={2} cursor={"pointer"} _hover={{ color: "#CEC12F" }}>
          <Icon as={FaChartPie} />
          <Text>Statistics</Text>
        </HStack>
        <HStack spacing={2} cursor={"pointer"} _hover={{ color: "#CEC12F" }}>
          <Icon as={FaHistory} />
          <Text>History</Text>
        </HStack>
        <HStack
          spacing={2}
          cursor={"pointer"}
          _hover={{ color: "#CEC12F" }}
          onClick={handelLogout}
        >
          <Icon as={RiLogoutBoxFill} />
          <Text>Logout</Text>
        </HStack>
      </VStack>
    </Box>
  );
};
