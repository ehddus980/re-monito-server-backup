import Login from "./components/Container/Login/LoginComponent";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <Login />
      </ChakraProvider>
    </>
  );
}

export default App;
