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
        