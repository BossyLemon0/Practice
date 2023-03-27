import  { createContext, useState, useMemo, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import StartPage from './page/StartPage';
import MainLayoutPage from './page/MainLayoutPage';
import ColorModeButton from './components/ThemeToggleButton';
// import { sizing } from '@mui/system';
import { Box } from '@mui/material';

//default value, used when the provider is not available, so really anything can be in the create context
//The colorModeContext changes based on the value passes in by the Context provider
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {

  return (
       <Box
      sx ={{
        display:'flex',
        bgcolor: 'background.default',
        color:'text.primary',
        width:'100%',
        height:'100%',
        margin: 0,
        padding: 0
      }}
      >

      <BrowserRouter>
        <Routes>
          <Route path ="/" element = {StartPage()}/> 
          <Route path ="/MainLayout/*" element = {MainLayoutPage()}/> 
        </Routes>
      </BrowserRouter>
      <div style={{ position: 'absolute', right: 100, bottom: 100 }}>
      <ColorModeButton />
      </div>

      </Box>

  );
}

//
function ToggleColorWrapper(){
  //uses either what's in local storage or uses light
  const [mode, setMode] = useState(() => localStorage.getItem('mode') || 'light');

  //This memoizations stops any uneccessary re-renders of color mode occuring
  //the colorMode uses a short hand for return, instead of ()=>{return()} it uses ()=>()
  //the togglecolormode function switches the mode to the opposite of the last mode
  //then after switching the state, it sets the new state to local storage so it persists
  //the object containing toggle color is only rendered when the mode state is changed
  //NOTE: removing mode from the dependency stops the button from firing after the first click.
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        setMode(newMode);
        localStorage.setItem('mode', newMode);
      },
    }),
    [mode],
  );

  //Create theme returns a theme object.
  //This theme is only chached and stored if mode changes states
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

  useEffect(()=>{
    console.log(theme.palette.mode)
  }, [theme])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default ToggleColorWrapper;
