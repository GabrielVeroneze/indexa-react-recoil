import { NavLink } from 'react-router'
import type { DadosForm } from '@/types/DadosForm'
import styled from 'styled-components'
import CampoDeDigitacao from './CampoDeDigitacao'

const FormularioEstilizado = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 3rem;
`

const ContainerBotoes = styled.div`
    display: flex;
    gap: 24px;
    justify-content: space-between;
    margin-top: 20px;
`

const BotaoCancelar = styled(NavLink)`
    background-color: transparent;
    border: 1px solid #0d6efd;
    border-radius: 4px;
    color: #0d6efd;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    padding: 6px 0;
    text-align: center;
    text-decoration: none;
    width: 50%;

    &:hover {
        background-color: #e9f5ff;
    }
`

const BotaoSalvar = styled.button`
    background-color: #0d6efd;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
    padding: 6px 0;
    width: 50%;

    &:hover {
        background-color: #0056b3;
    }
`

interface FormularioProps {
    dadosDoFormulario: DadosForm
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

function Formulario({
    dadosDoFormulario,
    onChange,
    onSubmit,
}: FormularioProps) {
    return (
        <FormularioEstilizado onSubmit={onSubmit}>
            <CampoDeDigitacao
                id="imagem"
                label="Link da Imagem"
                type="url"
                value={dadosDoFormulario.imagem}
                onChange={onChange}
                placeholder="Cole o link da imagem"
            />
            <CampoDeDigitacao
                id="nome"
                label="Nome"
                type="text"
                value={dadosDoFormulario.nome}
                onChange={onChange}
                placeholder="Digite o nome do contato"
            />
            <CampoDeDigitacao
                id="telefone"
                label="Número"
                type="tel"
                value={dadosDoFormulario.telefone}
                onChange={onChange}
                placeholder="Digite o número do telefone"
            />
            <ContainerBotoes>
                <BotaoCancelar to="/">Cancelar</BotaoCancelar>
                <BotaoSalvar type="submit">Salvar alterações</BotaoSalvar>
            </ContainerBotoes>
        </FormularioEstilizado>
    )
}

export default Formulario
