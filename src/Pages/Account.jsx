import React from "react";
import {
  Box,
  Flex,
  Text,
  Stat,
  StatHelpText,
  Spacer,
  VStack,
  Heading,
  Icon,
  IconButton,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Badge,
  Td,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaHistory } from "react-icons/fa";
import { Sidebar } from "../Component/Sidebar";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Account = () => {
  const balance = 99990;
  const navigate = useNavigate();

  const tableBgColor = useColorModeValue("white", "gray.800");
  const thBgColor = useColorModeValue("gray.100", "gray.700");

  const transactions = [
    {
      id: 1,
      date: "2024-01-15",
      description: "Purchase at XYZ Store",
      amount: -50.0,
    },
    {
      id: 2,
      date: "2024-01-14",
      description: "Salary Deposit",
      amount: 2000.0,
    },
    {
      id: 3,
      date: "2024-01-13",
      description: "ATM Withdrawal",
      amount: -100.0,
    },
    // Add more transactions as needed
  ];

  return (
    <div>
      <Flex direction="column" minHeight="90.9vh">
        <Flex direction={["column", "column", "row"]} flex="1">
          <Sidebar />

          <div
            style={{
              width: "100%",
              margin: "auto",
              paddingTop: "2%",
              paddingLeft: "1%",
              paddingRight: "1%",
            }}
          >
            <Flex align="center">
              <IconButton
                icon={<FaArrowLeft />}
                isRound
                size="lg"
                colorScheme="teal"
                onClick={() => navigate("/account")}
              />
              <Heading ml={4} size="lg">
                My Balance
              </Heading>
              <Spacer />
            </Flex>

            <Box flex="1" p={4}>
              <Flex direction="column" minHeight="85vh">
                <Flex align="center" justify="space-between" mb={8}>
                  <Stat m={4}>
                    <Heading color={"teal.400"}>Total Balance</Heading>
                    <Text fontSize="2xl" fontWeight="bold" color="teal.600">
                      ₹ {balance}
                    </Text>
                    <StatHelpText>as of today</StatHelpText>
                  </Stat>
                </Flex>

                <VStack>
                  <Box
                    bg="teal.500"
                    color="white"
                    p={6}
                    borderRadius="lg"
                    boxShadow="md"
                    width="100%"
                  >
                    <Flex align="center" justify="space-between">
                      <Text fontSize="xl">Recent Transactions</Text>
                      <IconButton
                        colorScheme="teal"
                        icon={<Icon as={FaHistory} />}
                        aria-label="View All Transactions"
                      />
                    </Flex>
                  </Box>
                  <Box width={"100%"} m={4} p={2} overflow="hidden">
                    <Flex direction="column">
                      <Table
                        variant="simple"
                        size="sm"
                        bg={tableBgColor}
                        borderRadius="md"
                        overflow="hidden"
                      >
                        <Thead bg={thBgColor}>
                          <Tr>
                            <Th textAlign={"center"}>Date</Th>
                            <Th textAlign={"center"}>Description</Th>
                            <Th textAlign={"center"}>Amount</Th>
                            <Th
                              textAlign={"center"}
                              display={{ base: "none", md: "table-cell" }}
                            >
                              Status
                            </Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {transactions.map((transaction) => (
                            <Tr key={transaction.id}>
                              <Td textAlign="center">{transaction.date}</Td>
                              <Td textAlign="center">
                                {transaction.description}
                              </Td>
                              <Td
                                textAlign="center"
                                color={
                                  transaction.amount > 0
                                    ? "green.500"
                                    : "red.500"
                                }
                              >
                                {transaction.amount > 0
                                  ? `+$${transaction.amount}`
                                  : `-$${Math.abs(transaction.amount)}`}
                              </Td>
                              <Td textAlign="center">
                                <Flex align="center" justify="center">
                                  <Badge
                                    colorScheme={
                                      transaction.amount > 0 ? "green" : "red"
                                    }
                                    display={{ base: "none", md: "table-cell" }}
                                    variant="solid"
                                  >
                                    {transaction.amount > 0
                                      ? "Credit"
                                      : "Debit"}
                                  </Badge>
                                </Flex>
                              </Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>

                      {transactions.length === 0 && (
                        <Text mt={4} color="gray.500">
                          No transactions to display.
                        </Text>
                      )}
                    </Flex>
                  </Box>
                </VStack>
                <Spacer />

                <Text fontSize="sm" textAlign="center" color="gray.500">
                  © 2024 Your Bank. All rights reserved.
                </Text>
              </Flex>
            </Box>
          </div>
        </Flex>
      </Flex>
    </div>
  );
};
