import { useState } from 'react'
import { useNavigate } from 'react-router'
import type { DadosForm } from '@/types/DadosForm'
import Wrapper from '@/components/Wrapper'
import Header from '@/components/Header'
import Container from '@/components/Container'
import BotaoVoltar from '@/components/BotaoVoltar'
import Titulo from '@/components/Titulo'
import Formulario from '@/components/Formulario'

function Cadastro() {
    const navigate = useNavigate()
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log('Formulário enviado!')
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
