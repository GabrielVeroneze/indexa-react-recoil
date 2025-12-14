import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import AppRoutes from '@/routes'
import '@/styles/global.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RecoilRoot>
            <AppRoutes />
        </RecoilRoot>
    </StrictMode>,
)
