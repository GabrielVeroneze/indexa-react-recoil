import { NavLink } from 'react-router'
import styled from 'styled-components'
import voltarIcon from '@/assets/icon.svg'

const Botao = styled(NavLink)`
    align-items: center;
    color: #0d6efd;
    display: flex;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 400;
    gap: 8px;
    line-height: 27px;
    text-decoration: none;

    img {
        height: 14px;
        width: 14px;
    }
`

function BotaoVoltar() {
    return (
        <Botao to="/">
            <img src={voltarIcon} alt="Voltar" />
            Voltar
        </Botao>
    )
}

export default BotaoVoltar
