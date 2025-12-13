import styled from 'styled-components'
import user from '@/assets/user.png'

const TituloContainer = styled.div`
    border-bottom: 1px solid #0d6efd;
    padding-bottom: 24px;
    text-align: center;
    width: 100%;

    img {
        align-items: center;
        border: 2px dashed #ccc;
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        height: 104px;
        justify-content: center;
        margin: 0 auto 16px;
        transition: border-color 0.2s ease;
        width: 104px;
    }

    h2 {
        color: #0d6efd;
        font-family: Montserrat;
        font-size: 26px;
        font-weight: 700;
        line-height: 39px;
    }
`

interface TituloProps {
    children: React.ReactNode
}

function Titulo({ children }: TituloProps) {
    return (
        <TituloContainer>
            <img src={user} alt="Usuário" />
            <h2>{children}</h2>
        </TituloContainer>
    )
}

export default Titulo
