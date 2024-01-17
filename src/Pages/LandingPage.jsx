import React from "react";
import {
  Box,
  Heading,
  HStack,
  Icon,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { Carousel } from "flowbite-react";

import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div style={{ background: "pink", height: "92.9vh" }}>
      <div
        className="h-56 sm:h-64 xl:h-80 2xl:h-96"
        style={{
          width: "95%",
          height: "60vh",
          margin: "auto",
          padding: "10px",
        }}
      >
        <Carousel>
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://imgs.search.brave.com/WdAvgsawzxb0z7py3s2Om8sB2MHBuRqOP95vN4dg5qI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8yOS8yNC93/ZS1sb3ZlLW91ci13/b3JrLXdlYi1iYW5u/ZXItd2l0aC1iYW5r/LXdvcmtlci13b21h/bi12ZWN0b3ItNDMz/NjI5MjQuanBn"
            alt="..."
          />
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://www.shutterstock.com/shutterstock/photos/2220429685/display_1500/stock-photo-digital-banking-virtual-bank-online-banking-and-digital-money-man-touch-digital-virtual-bank-on-2220429685.jpg"
            alt="..."
          />
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://imgs.search.brave.com/QnaWhXzcreCqhmXx2oB6HuGhznGCvimimbhwuortIGM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9tb2JpbGUtYmFu/a2luZy1jb25jZXB0/LWhhbmQtaG9sZHMt/c21hcnRwaG9uZS13/aXRoLWFic3RyYWN0/LWljb25zLWJhbmst/ZmluYW5jaWFsLXNl/cnZpY2VzXzEwMjU4/My01MTQwLmpwZz9z/aXplPTYyNiZleHQ9/anBn"
            alt="..."
          />
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://imgs.search.brave.com/yqnS4_U2hCDBQ8trdLh9e2Mpymw1lnpcgm2c00hu1l0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQw/NzMyNzEyMC92ZWN0/b3IvZmluYW5jZS1y/ZWxhdGVkLW1vZGVy/bi1saW5lLWJhbm5l/ci13aXRoLWljb25z/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1Zc1ozS2trMEJD/cG5IZzE4emZ5TGN4/RHBRR195bnl1RG12/OTc1RllBZjVnPQ"
            alt="..."
          />
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://imgs.search.brave.com/3Eh_idA8aq-s9f1gGyMPpYpX3cC2swMNw-Q6UyvXKqQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8zMS8yMy9i/YW5uZXItcmVhbGlz/dGljLTNkLXBpbmst/cmV0cm8tcGlnZ3kt/YmFuay12ZWN0b3It/MzcyODMxMjMuanBn"
            alt="..."
          />
        </Carousel>
        <Box maxW="8xl" mx="auto" align={"center"}>
          <Box
            width={{ lg: "sm" }}
            transform={{ base: "translateY(-50%)", lg: "none" }}
            bg={{
              base: useColorModeValue("red.50", "gray.700"),
              lg: "transparent",
            }}
            mx={{ base: "6", md: "8", lg: "0" }}
            px={{ base: "6", md: "8", lg: "0" }}
            py={{ base: "6", md: "8", lg: "12" }}
          >
            <Stack align={"center"} spacing={{ base: "8", lg: "10" }}>
              <Stack spacing={{ base: "2", lg: "4" }}>
                <Heading
                  size="xl"
                  color={useColorModeValue("red.500", "red.300")}
                >
                  Mobile Banking
                </Heading>
                <Heading size="md" fontWeight="normal">
                  Welcome to our Banking System.
                </Heading>
              </Stack>
              <HStack spacing="3">
                <Link
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    fontSize: "large",
                  }}
                  to={"/account"}
                >
                  Let's Go
                </Link>
                <Icon
                  color={useColorModeValue("red.500", "red.300")}
                  as={FaArrowRight}
                />
              </HStack>
            </Stack>
          </Box>
        </Box>
      </div>
    </div>
  );
};
