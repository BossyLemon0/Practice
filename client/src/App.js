import React, { createContext, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import StartPage from './page/StartPage';
import MainLayoutPage from './page/MainLayoutPage';
import ColorModeButton from './components/ThemeToggleButton';


// const ColorModeContext = createContext({ toggleColorMode: () => {} });
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  // const theme = useTheme();
  // const colorMode = React.useContext(ColorModeContext);



  return (

    <ThemeProvider theme={darkTheme}>
      <Box
      sx ={{
        display:'flex',
        bgcolor: 'background.default',
        color:'text.primary'
      }}
      >

      <BrowserRouter>
        <Routes>
          <Route path ="/" element = {StartPage()}/> 
          <Route path ="/MainLayout/*" element = {MainLayoutPage()}/> 

        </Routes>
      </BrowserRouter>
      <ColorModeButton />
      </Box>
    </ThemeProvider>

  );
}

export default App;
