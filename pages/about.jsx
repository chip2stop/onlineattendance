import React from "react";
import Head from "next/head";

import Menu from "../components/Menu";

import { Flex, Heading, Stack, Text, Box, Image } from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <Head>
        <title>Stock Management</title>
      </Head>
      <Flex h="100vh" flexDir="row" overflow="hidden" maxW="2000px">
        {/* Column 1 - Menu */}
 