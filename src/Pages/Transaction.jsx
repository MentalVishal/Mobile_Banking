import React from "react";
import {
  Box,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  Text,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { Sidebar } from "../Component/Sidebar";
import { useSelector } from "react-redux";

export const Transaction = () => {
  const tableBgColor = useColorModeValue("white", "gray.800");
  const thBgColor = useColorModeValue("gray.100", "gray.700");

  const Alltransactions = useSelector(
    (store) => store.userReducer.transactions
  );
  const transactions = [];
  if (Alltransactions.length > 0) {
    for (let i = Alltransactions.length - 1; i >= 0; i--) {
      transactions.push(Alltransactions[i]);
    }
  }

  return (
    <Flex direction="column" minHeight="92.9vh">
      <Flex direction={["column", "column", "row"]} flex="1">
        <Sidebar />

        <Box
          width={"100%"}
          p={6}
          borderWidth={1}
          borderRadius="lg"
          boxShadow="md"
          overflow="hidden"
        >
          <Flex direction="column">
            <Heading fontSize="2xl" mb={4} color="teal.500">
              Transaction History
            </Heading>

            <Table
              variant="simple"
              size="sm"
              bg={tableBgColor}
              borderRadius="md"
              overflow="hidden"
            >
              <Thead bg={thBgColor}>
                <Tr>
                  <Th>Date</Th>
                  <Th>Description</Th>
                  <Th>Amount</Th>
                  <Th display={{ base: "none", md: "table-cell" }}>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {transactions?.map((transaction) => (
                  <Tr key={transaction?.id}>
                    <Td>{transaction?.date}</Td>
                    <Td>{transaction.description}</Td>
                    <Td
                      color={
                        transaction.transType === "Credit"
                          ? "green.500"
                          : "red.500"
                      }
                    >
                      {transaction.transType === "Credit"
                        ? `+₹${transaction.amount}`
                        : `-₹${Math.abs(transaction.amount)}`}
                    </Td>
                    <Td>
                      <Badge
                        display={{ base: "none", md: "table-cell" }}
                        colorScheme={
                          transaction.transType === "Credit" ? "green" : "red"
                        }
                        variant="solid"
                      >
                        {transaction.transType === "Credit"
                          ? "Credit"
                          : "Debit"}
                      </Badge>
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
      </Flex>
    </Flex>
  );
};
