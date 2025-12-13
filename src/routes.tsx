import { BrowserRouter as Router, Route, Routes } from 'react-router'
import Home from '@/pages/Home'
import Cadastro from '@/pages/Cadastro'
import EditarContato from '@/pages/EditarContato'

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="cadastro" element={<Cadastro />} />
                <Route path="/editar/:id" element={<EditarContato />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes
