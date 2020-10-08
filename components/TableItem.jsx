import { useDispatch } from "react-redux";
import { del } from "../store/slices/productSlice";

import { formatCurrentMonth } from "../utils/dateUtil";
import { useMask } from "../hooks/useMask";

import Link from "next/link";

import {
  Tr,
  Td,
  Flex,
  Heading,
  Text,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { FiX, FiClipboard } from "react-icons/fi";

export default function TableItem({ data }) {
  const mask = useMask();
  const dispatch = useDispatch();

  const handleDelItem = () => {
    if (confirm("Deletar este item")) {
      dispatch(del({ id: data.id }));
    }
  };

  return (
    <Tr>
      <Td>
        <Flex align="center">
          <Flex flexDir="column">
            <Heading size="sm" letterSpacing="tight">
              {data.productName}
            </Heading>
            <Text fontSize="sm" color="gray">
              {formatCurrentMonth(data.dateMade)}
            </Text>
          </Flex>
 