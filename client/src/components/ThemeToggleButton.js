import { useContext } from 'react'
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from "../App";


function ColorModeButton(){
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    
    return(
        <IconButton sx={{ ml: 1 , width: 85, height: 85 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon sx={{fontSize: 60}} /> : <Brightness4Icon sx={{fontSize: 65}}/>}
        </IconButton>
    );

};

export default ColorModeButton;