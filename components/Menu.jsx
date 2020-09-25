import Link from "next/link";

import { Flex, Heading, Avatar, Text, Icon } from "@chakra-ui/react";
import { FiHome, FiCoffee, FiGithub } from "react-icons/fi";

export default function Menu() {
  return (
    <Flex
      w="15%"
      flexDir="column"
      alignItems="center"
      backgroundColor="#020202"
      color="#fff"
    >
      <Flex flexDir="column" justifyContent="space-between" h="100vh">
        <Flex flexDir="column" as="nav">
          <Heading
            mt={50}
            mb={100}
            fontSize="4xl"
            alignSelf="center"
            letterSpacing="tight"
          >
            Stock.
          </Heading>
          <Flex flexDir="column" align="flex-start" justifyContent="center">
            <Flex className="sidebar-items">
              <Link href="/">
                <Flex>
                  <Icon as={FiHome} fontSize="2xl" />
                  <Text color="#fff" cursor={"pointer"}>
                    Home
                  </Text>
                </Flex>
              </Link>
            </Flex>
            <Flex className="sidebar-items">
              <Link href="/about">
                <Flex