import { Navigate, Routes, Route } from "react-router-dom";
import Button from '@mui/material/Button';
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/pagina-inicial" element={<Button>Teste</Button>} />
            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    )
 };