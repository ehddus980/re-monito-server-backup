import Login from "./components/Container/Login/LoginComponent";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Container/Main/MainComponent";
import Calendar from "./components/Container/Calendar/CalendarComponent";
import TopNav from "./components/Container/Nav/TopNavComponent";
import Planner from "./components/Container/Planner/PlannerComponent";

function App() {
  return (
    <>
      <TopNav/>
      <Routes>  {/* Router 설정하기위해 기존의 App파일을 다음과 같이 설정함  */}
        <Route exact path="/" element={<Main/>} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/Planner" element={< Planner/>}/>
      </Routes>
      {/* <ChakraProvider>
        <Main/>
        <Login />
      </ChakraProvider> */}
    </>
  );
}

export default App;
