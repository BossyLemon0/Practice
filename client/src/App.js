import  { createContext, useContext, useState, useMemo } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import StartPage from './page/StartPage';
import MainLayoutPage from './page/MainLayoutPage';
import ColorModeButton from './components/ThemeToggleButton';
import { sizing } from '@mui/system';


const ColorModeContext = createContext({ toggleColorMode: () => {} });
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  breakpoints:{
    values:{

    }
  }
});

function App() {

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);


  return (
      <Box
      sx ={{
        display:'flex',
        bgcolor: 'background.default',
        color:'text.primary',
        width:'100%',
        height:'100%'
      }}
      >

      <BrowserRouter>
        <Routes>
          <Route path ="/" element = {StartPage()}/> 
          <Route path ="/MainLayout/*" element = {MainLayoutPage()}/> 

        </Routes>
      </BrowserRouter>
      <ColorModeButton props={{theme, colorMode}} />
      </Box>


  );
}

//s
function ToggleColorWrapper(){
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
          ? {
            background:{
              default: "blue",
              paper: "blue"
            }
          }:{
            background:{
              default: "orange",
              paper: "orange"
            }
          }
          )
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ToggleColorWrapper;
