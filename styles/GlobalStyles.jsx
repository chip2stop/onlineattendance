
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "Poppins", sans-serif !important;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  .sidebar-items:not(:last-child) {
    margin-bottom: 1.5em;
  }

  @media only screen and (max-width: 767px) {
    .sidebar-items {
      margin-bottom: 0 !important;
    }
  }

  .sidebar-items {
    color: gray;
    font-size: large;
  }

  .sidebar-items p {
    margin-left: 1em;
  }

  .sidebar-items:hover svg {
    color: #b57295;
  }

  .sidebar-items:hover p {
    color: #fff;
  }

  .active {
    color: #fff;
  }

  .active-icon {
    color: #b57295 !important;
  }
`;