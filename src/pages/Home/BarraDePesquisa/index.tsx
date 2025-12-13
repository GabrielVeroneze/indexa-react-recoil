import styled from 'styled-components'

const InputPesquisa = styled.input`
    background-color: transparent;
    border: 1px solid #ced4da;
    color: #6c757d;
    font-family: Montserrat;
    font-size: 18px;
    line-height: 27px;
    padding: 7px 13px;
    width: 100%;

    &:focus {
        border-color: #0d6efd;
        outline: none;
    }
`

interface BarraDePesquisaProps {
    onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function BarraDePesquisa({ onSearch }: BarraDePesquisaProps) {
    return (
        <InputPesquisa
            type="text"
            placeholder="Pesquisar contatos"
            onChange={onSearch}
        />
    )
}

export default BarraDePesquisa
