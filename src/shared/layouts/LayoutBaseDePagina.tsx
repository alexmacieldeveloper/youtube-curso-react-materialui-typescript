import { Box } from '@mui/system'
import { Icon, Typography, useTheme, useMediaQuery, IconButton } from '@mui/material'
import { useDrawerContext } from '../contexts'
interface ILayoutBaseDePaginaProp {
    title: string
    children: React.ReactNode
}
export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProp> = ({ children, title }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    
    const { toggleDrawerOpen } = useDrawerContext();

    return (
        <Box height='100%' display='flex' flexDirection='column' gap={1}>
            <Box padding={1} display='flex' alignItems="center" height={theme.spacing(12)} gap={1}>
                {smDown && (
                    <IconButton onClick={toggleDrawerOpen}>
                        <Icon>menu</Icon>
                    </IconButton>
                )}
                <Typography variant="h5" component="h4">{title}</Typography>
            </Box>
            <Box>
                Barra de Ferramentas
            </Box>
            <Box>
                {children}
            </Box>
        </Box>
    )
}