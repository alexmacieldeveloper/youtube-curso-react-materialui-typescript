import { Box } from '@mui/system'
import { Icon, Typography, useTheme, useMediaQuery, IconButton } from '@mui/material'
import { useDrawerContext } from '../contexts'
interface ILayoutBaseDePaginaProp {
    titulo: string
    barraDeFerramentas: React.ReactNode | undefined
    children: React.ReactNode
}
export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProp> = ({ children, titulo, barraDeFerramentas }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));

    
    const { toggleDrawerOpen } = useDrawerContext();

    return (
        <Box height='100%' display='flex' flexDirection='column' gap={1}>
            <Box padding={1} display='flex' alignItems="center" gap={1} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)} >
                {smDown && (
                    <IconButton onClick={toggleDrawerOpen}>
                        <Icon>menu</Icon>
                    </IconButton>
                )}
                <Typography variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'} component="h4" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipses">{titulo}</Typography>
            </Box>
            {barraDeFerramentas && (
                <Box>
                    {barraDeFerramentas}
                </Box>
            )}
            <Box flex={1} overflow="auto">
                {children}
            </Box>
        </Box>
    )
}