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

exp