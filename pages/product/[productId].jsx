import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { edit } from "../../store/slices/productSlice";

import Head from "next/head";
import { useRouter } from "next/router";

import Menu from "../../components/Menu";

import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Button,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";

export default function Product() {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
