import React, { useEffect } from "react";

import Link from "next/link";

import { Flex, Heading, Text, IconButton, Button } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

import { useSelector, useDispatch } from "react-redux";
import { setRevenue, setExpense } from "../store/slices/financeSlice";
import { order } from "../store/slices/productSlice";

import TableArea from "./TableArea";

import { getCurrentDate, formatCurrentMonth } from "../utils/dateUtil";
import { useMask } from "../hooks/useMask";

export default function ContentArea() {
  const list = useSelector((state) => state.product);
  const finance = useSelector((state) => state.finance);
  const dispatch = useDispatch();

  const currentDate = getCurrentDate();
  const mask = useMask();

  useEffect(() => {
    let revenueCount = 0;
    let expenseCount = 0;

    // loop to complete values ​​in income and expense
    for (let i in list) {
      if (list[i].category === "Venda") {
        revenueCount += list[i].totalValue;
      } else {
        expenseCount += list[i].totalValue;
      }
    }

    dispatch(setRevenue(revenueCount));
    dispatch(setExpense(expenseCount));
  }, [list]);

  return (
    <Flex
      w="85%"
      p="3%"
      flexDir="column"
      overflow="auto"
      minH="100vh"
      background="#fff"
    >
      <Heading fontWeight="normal" mb={12} letterSpacing="tight">
        Bem-vindo de volta,{" "}
        <Flex fontWeight="bold" display="inline-flex">
          Marcos 👋
        </Flex>
      </Heading>
      <Flex flexDir="row">
        <Flex
          flexDir="column"
          padding="5"
          marginRight={5}
          background="#020202"
          borderRadius={10}
          minW="150px"
        >
          <Text color="#ccc" fontSize="sm">
            Receitas
          </Text>
          <Text color=