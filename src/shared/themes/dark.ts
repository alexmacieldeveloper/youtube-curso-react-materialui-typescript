import { createTheme } from '@mui/material'

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: '#FBC02D',
            dark: '#F9A825',
            light: '#FFEB3B',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#00BCD4',
            dark: '#26C6DA',
            light: '#4DD0E1',
            contrastText: '#ffffff',
        },
        background: {
            default: '#202124',
            paper: '#303134',
        }
    }
})