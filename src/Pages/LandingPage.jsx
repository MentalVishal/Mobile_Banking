import React from "react";
import {
  background,
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Skeleton,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ background: "pink", height: "100vh" }}>
      <Box
        maxW="8xl"
        mx="auto"
        px={{ base: "0", lg: "12" }}
        py={{ base: "0", lg: "12" }}
        align={"center"}
      >
        <Stack
          direction={{ base: "column-reverse", lg: "row" }}
          spacing={{ base: "0", lg: "20" }}
        >
          <Flex flex="1" overflow="hidden">
            <Image
              src="https://imgs.search.brave.com/JBD3REKg-w92qITrHXM56Hu6F3u82blsOkuYXLfMrbI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9tb2JpbGUtb25s/aW5lLWJhbmtpbmct/Y29uY2VwdC1jbG9z/ZS11cC1mZW1hbGUt/aGFuZHMtdXNpbmct/bW9iaWxlLXBob25l/LWhvbGRpbmctY3Jl/ZGl0LWNhcmRfMTI4/OTItNzUuanBnP3Np/emU9NjI2JmV4dD1q/cGc"
              alt="Lovely Image"
              fallback={<Skeleton />}
              maxH="650px"
              minW="400px"
              objectFit="cover"
              flex="1"
            />
            <Image
              display={{ base: "none", sm: "initial" }}
              src="https://imgs.search.brave.com/rJmRp9ueUae3caVsq2E3UuqhtaLcAQrfmWqRvRlFEWk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9vbmxpbmUtYmFu/a2luZy1jb25jZXB0/LXdpdGgtZGlnaXRh/bC1jbGFzc2ljLWJh/bmstYnVpbGRpbmct/c3ltYm9sLWxhcHRv/cC1tb25pdG9yLWJ1/c2luZXNzbWFuLWhh/bmRzXzY3MDE0Ny01/MDkuanBnP3NpemU9/NjI2JmV4dD1qcGc"
              alt="Lovely Image"
              fallback={<Skeleton />}
              maxH="650px"
              objectFit="cover"
            />
          </Flex>
        </Stack>
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
                to={"/home"}
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
  );
};
