import { createGlobalStyle } from "styled-components";
import background from "./money3.jpg";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

#root {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center;

  button {
    cursor: pointer;
  }
}
`;
