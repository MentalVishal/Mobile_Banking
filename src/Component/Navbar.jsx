import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Text,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  useMediaQuery,
  Wrap,
  WrapItem,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const navigate = useNavigate();

  const isLogin = false;
  const name = "";
  const image = "";

  const handelAccount = () => {
    onClose();
    navigate("/account");
  };
  const handelDeposit = () => {
    onClose();
    navigate("/deposit");
  };
  const handelWithdraw = () => {
    onClose();
    navigate("/withdraw");
  };
  const handelLogin = () => {
    onClose();
    navigate("/login");
  };

  return (
    <Flex
      bg="teal"
      p={2}
      pl={5}
      pr={3}
      justifyContent="space-between"
      align="center"
      cursor={"pointer"}
    >
      <Text fontWeight="bold" fontSize="2xl" color="yellow">
        Mobile Banking
      </Text>
      {isLargerThan768 ? (
        <Flex align="center">
          <Text
            pl={3}
            fontWeight="bold"
            fontSize="xl"
            color="white"
            onClick={() => navigate("/account")}
          >
            Account
          </Text>
          <Text
            pl={3}
            fontWeight="bold"
            fontSize="xl"
            color="white"
            onClick={() => navigate("/deposit")}
          >
            Deposit
          </Text>
          <Text
            pl={3}
            fontWeight="bold"
            fontSize="xl"
            color="white"
            onClick={() => navigate("/withdraw")}
          >
            Withdraw
          </Text>
          <Text
            pl={3}
            fontWeight="bold"
            fontSize="xl"
            color="white"
            onClick={() => navigate("/login")}
          >
            {isLogin ? "Logout" : "Login"}
          </Text>
          <Wrap pl={3}>
            <WrapItem>
              <Avatar name={name} src={Image} />
            </WrapItem>
          </Wrap>
        </Flex>
      ) : (
        <>
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Open menu"
            color="white"
            onClick={onOpen}
          />
          <Drawer
            size={"xs"}
            placement="right"
            onClose={onClose}
            isOpen={isOpen}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader bg="teal" color="white">
                Menu
                <DrawerCloseButton />
              </DrawerHeader>
              <DrawerBody>
                {/* Menu items go here */}
                <Text
                  pl={3}
                  fontWeight="bold"
                  fontSize="xl"
                  color="teal"
                  onClick={handelAccount}
                >
                  Account
                </Text>
                <Text
                  pl={3}
                  fontWeight="bold"
                  fontSize="xl"
                  color="teal"
                  onClick={handelDeposit}
                >
                  Deposit
                </Text>
                <Text
                  pl={3}
                  fontWeight="bold"
                  fontSize="xl"
                  color="teal"
                  onClick={handelWithdraw}
                >
                  Withdraw
                </Text>
                <Text
                  pl={3}
                  fontWeight="bold"
                  fontSize="xl"
                  color="teal"
                  onClick={handelLogin}
                >
                  {isLogin ? "Logout" : "Login"}
                </Text>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </Flex>
  );
};