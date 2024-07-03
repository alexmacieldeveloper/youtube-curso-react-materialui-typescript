import { Drawer, 
    useTheme, 
    Avatar, 
    Divider, 
    List, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText, 
    Icon, 
    useMediaQuery } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import { Box } from '@mui/system'
import { useDrawerContext } from '../../contexts';
import { useNavigate, useResolvedPath, useMatch } from 'react-router-dom'

interface IListItemLinkProps {
    label: string
    icon: string
    to: string
    onClick: (() => void) | undefined
}

const ListItemLink: React.FC <IListItemLinkProps> = ({ to, icon, label, onClick }) => {
    const navigate = useNavigate();

    const resolvedPath = useResolvedPath(to);
    const match = useMatch({ path: resolvedPath.pathname, end: false });

    const handleClick = () => {
        navigate(to);
        onClick?.();
    };

    return ( 
        <ListItemButton selected={!!match} onClick={handleClick}>
            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton> 
    );
}
 
interface IMenuLateralProp {
    children: React.ReactNode
}
export const MenuLateral: React.FC<IMenuLateralProp> = ({ children }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext()
    return (
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
                <Box width={theme.spacing(28)} display="flex" flexDirection="column" height="100%">
                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                        <Avatar
                            sx={{height: theme.spacing(12), width: theme.spacing(12)}} 
                            src="/static/images/avatar/1.jpg" />
                    </Box>
                    <Divider />
                    <Box flex={1}>
                        <List component="nav">
                            <ListItemLink 
                                icon='home'
                                to='/pagina-inicial'
                                label='Página inicial'
                                onClick={smDown ? toggleDrawerOpen : undefined}
                            />
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)}>
                {children}
            </Box>
        </>
    )
}