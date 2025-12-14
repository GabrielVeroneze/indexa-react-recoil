import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import type { DadosForm } from '@/types/DadosForm'
import type { Contato } from '@/types/Contato'
import Wrapper from '@/components/Wrapper'
import Header from '@/components/Header'
import Container from '@/components/Container'
import BotaoVoltar from '@/components/BotaoVoltar'
import Titulo from '@/components/Titulo'
import Formulario from '@/components/Formulario'

function EditarContato() {
    const navigate = useNavigate()
    const { id } = useParams()

    const contatos: Contato[] = [
        {
            nome: 'moni',
            telefone: '21321312',
            imagem: 'https://fastly.picsum.photos/id/338/200/300.jpg?hmac=rE5P3WDLKY1VMpd9y_FLo_OKhTzG4_3zCbGjKvgOL5w',
            id: 1,
        },
    ]

    const contatoAtual = contatos.find((contato) => contato.id === Number(id))

    const [dadosDoFormulario, setDadosDoFormulario] = useState<DadosForm>({
        nome: contatoAtual?.nome ?? '',
        telefone: contatoAtual?.telefone ?? '',
        imagem: contatoAtual?.imagem ?? '',
    })

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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log('Formulário enviado!')
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
