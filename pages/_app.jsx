import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { GlobalStyles } from "../styles/GlobalStyles";

import store from "../store/configureStore";

function myApp({ Component, pageProps }) {
  return (
    <Provider 