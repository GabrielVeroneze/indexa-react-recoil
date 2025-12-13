import styled from 'styled-components'
import addIcon from '@/assets/icon.svg'

const AddButton = styled.button`
    align-items: center;
    background-color: transparent;
    border: 1px solid #0d6efd;
    color: #0d6efd;
    cursor: pointer;
    display: flex;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 700;
    gap: 8px;
    line-height: 27px;
    margin: 0 auto;
    padding: 6px;
    width: fit-content;

    &:hover {
        background-color: #e9f5ff;
    }
`

interface BotaoAdicionarProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

function BotaoAdicionar({ onClick }: BotaoAdicionarProps) {
    return (
        <AddButton onClick={onClick}>
            <img src={addIcon} alt="Add" />
            Criar novo contato
        </AddButton>
    )
}

export default BotaoAdicionar
