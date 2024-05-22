import { Drawer, useTheme } from '@mui/material'
import { Box } from '@mui/system'

interface IMenuLateralProp {
    children: React.ReactNode
}
export const MenuLateral: React.FC<IMenuLateralProp> = ({ children }) => {
    const theme = useTheme();

    return (
        <>
            <Drawer variant='permanent'>
                teste
            </Drawer>
            <Box height='100vh' marginLeft={theme.spacing(28)}>
                {children}
            </Box>
        </>
    )
}