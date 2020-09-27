import React from "react";

import { useSelector } from "react-redux";

import { Table, Thead, Tbody, Tr, Th } from "@chakra-ui/react";

import TableItem from "./TableItem";

export default function TableArea() {
  const list = useSelector