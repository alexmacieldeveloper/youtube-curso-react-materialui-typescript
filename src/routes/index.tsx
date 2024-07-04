import { Navigate, Routes, Route } from "react-router-dom";
import { useDrawerContext } from '../shared/contexts'
import { useEffect } from 'react'
import { Dashboard } from '../pages'

export const AppRoutes = () => {
    const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();
    
    useEffect(() => {
        setDrawerOptions([
            {
                label: 'Página inicial',
                icon: 'home',
                path: '/pagina-inicial',
            },
        ])
    },[])
    
    return (
        <Routes>
            <Route path="/pagina-inicial" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    )
 };