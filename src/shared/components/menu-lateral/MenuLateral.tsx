import { Drawer, 
    useTheme, 
    Avatar, 
    Divider, 
    List, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText, Icon } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import { Box } from '@mui/system'

interface IMenuLateralProp {
    children: React.ReactNode
}
export const MenuLateral: React.FC<IMenuLateralProp> = ({ children }) => {
    const theme = useTheme();

    return (
        <>
            <Drawer variant='permanent'>
                <Box width={theme.spacing(28)} display="flex" flexDirection="column" height="100%">
                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                        <Avatar
                            sx={{height: theme.spacing(12), width: theme.spacing(12)}} 
                            src="/static/images/avatar/1.jpg" />
                    </Box>
                    <Divider />
                    <Box flex={1}>
                        <List component="nav">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>home</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Página inicial" />
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box height='100vh' marginLeft={theme.spacing(28)}>
                {children}
            </Box>
        </>
    )
}