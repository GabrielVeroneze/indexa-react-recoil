import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useContatos } from '@/hooks/useContatos'
import type { DadosForm } from '@/types/DadosForm'
import Wrapper from '@/components/Wrapper'
import Header from '@/components/Header'
import Container from '@/components/Container'
import BotaoVoltar from '@/components/BotaoVoltar'
import Titulo from '@/components/Titulo'
import Formulario from '@/components/Formulario'

function Cadastro() {
    const navigate = useNavigate()
    const { addContatos } = useContatos()
    const [dadosDoFormulario, setDadosDoFormulario] = useState<DadosForm>({
        nome: '',
        telefone: '',
        imagem: '',
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setDadosDoFormulario((prev) => ({
            ...prev,
            [id]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            await addContatos(dadosDoFormulario)

            navigate('/')
        } catch (erro) {
            console.error('Erro ao adicionar o contato', erro)
        }
    }

    return (
        <Wrapper>
            <Header />
            <Container>
                <BotaoVoltar />
                <Titulo>Adicionar contato</Titulo>
                <Formulario
                    dadosDoFormulario={dadosDoFormulario}
                    onChange={handleInputChange}
                    onSubmit={handleSubmit}
                />
            </Container>
        </Wrapper>
    )
}

export default Cadastro
