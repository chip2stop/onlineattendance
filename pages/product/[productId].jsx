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
  const [productValue, setProductValue] = useState("");

  const state = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const router = useRouter();
  const { query } = useRouter();

  useEffect(() => {
    // loop to check if the id passed as a parameter