import { Navigate, Routes, Route } from "react-router-dom";
import Button from '@mui/material/Button';
import { useDrawerContext } from '../shared/contexts'

export const AppRoutes = () => {
    const { toggleDrawerOpen } = useDrawerContext();
    
    return (
        <Routes>
            <Route path="/pagina-inicial" element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Toggle drawer</Button>} />
            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    )
 };