import "./App.css";
import { NavigationBar } from "./NavigationBar";
import ContactHeader from "../src/ContactHeader/index.js"
import { Box, Stack } from "@mui/material";
import { Header } from "./Header"
import { Main } from "./Main";

function App() {

  return (
    <Stack  direction={"row"} >
      <Box>
        <NavigationBar />
      </Box>
      <Box sx={{width:'calc(100vw - 60px)'}}>
        <Header/>
        <ContactHeader/>
        <Main/>
      </Box>
    </Stack>
  );
}

export default App;
