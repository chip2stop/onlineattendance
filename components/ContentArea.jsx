import React, { useEffect } from "react";

import Link from "next/link";

import { Flex, Heading, Text, IconButton, Button } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

import { useSelector, useDispatch } from "react-redux";
import { setRevenue, setExpense } from "../store/slices/financeSlice";
import { order } from "../store/slices/productSlice";

import TableArea from "./TableArea";

import { getCurrentDate, formatCurrentMonth } from "../utils/dateUtil";
impo