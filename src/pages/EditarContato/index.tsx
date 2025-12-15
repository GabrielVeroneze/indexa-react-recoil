import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useContatos } from '@/hooks/useContatos'
import type { DadosForm } from '@/types/DadosForm'
import Wrapper from '@/components/Wrapper'
import Header from '@/components/Header'
import Container from '@/components/Container'
import BotaoVoltar from '@/components/BotaoVoltar'
import Titulo from '@/components/Titulo'
import Formulario from '@/components/Formulario'

function EditarContato() {
    const navigate = useNavigate()
    const { id } = useParams()
    const { contatos, atualizarContato } = useContatos()

    const [dadosDoFormulario, setDadosDoFormulario] = useState<DadosForm>({
        nome: '',
        telefone: '',
        imagem: '',
    })

    useEffect(() => {
        const contatoAtual = contatos.find(
            (contato) => contato.id === Number(id),
        )

        if (contatoAtual) {
            setDadosDoFormulario(contatoAtual)
        }
    }, [contatos, id])

    // Atualizar estado do formulário
    const gerenciarMudancaDeInput = (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const { id, value } = e.target
        setDadosDoFormulario((prev) => ({
            ...prev,
            [id]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            await atualizarContato(Number(id), dadosDoFormulario)

            navigate('/')
        } catch (erro) {
            console.error('Erro ao atualizar o contato', erro)
        }
    }

    return (
        <Wrapper>
            <Header />
            <Container>
                <BotaoVoltar />
                <Titulo>Editar contato</Titulo>
                <Formulario
                    dadosDoFormulario={dadosDoFormulario}
                    onChange={gerenciarMudancaDeInput}
                    onSubmit={handleSubmit}
                />
            </Container>
        </Wrapper>
    )
}

export default EditarContato
