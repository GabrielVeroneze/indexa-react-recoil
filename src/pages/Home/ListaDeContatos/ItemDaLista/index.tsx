import { NavLink } from 'react-router'
import { useContatos } from '@/hooks/useContatos'
import type { Contato } from '@/types/Contato'
import styled from 'styled-components'
import editIcon from '@/assets/pencil-square.svg'
import deleteIcon from '@/assets/trash.svg'

const ListItem = styled.li`
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
`

const Perfil = styled.div`
    align-items: center;
    display: flex;
    gap: 8px;
`

const PerfilImagem = styled.img`
    height: 24px;
    object-fit: cover;
    width: 24px;
`

const PerfilTitulo = styled.p`
    color: #212529;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
`

const Telefone = styled.p`
    color: #212529;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
`

const Icones = styled.div`
    display: flex;
    gap: 16px;
`

const BotaoBase = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;

    img {
        height: 18px;
        width: 18px;
    }
`

const BotaoEditar = styled(NavLink)`
    ${BotaoBase}
`

const BotaoExcluir = styled(BotaoBase)``

interface ItemDaListaProps {
    item: Contato
}

function ItemDaLista({ item }: ItemDaListaProps) {
    const { deletarContato } = useContatos()

    const removerContato = async () => {
        const confirmarRemocao = window.confirm(
            `Você tem certeza que deseja excluir o contato ${item.nome}?`,
        )

        if (confirmarRemocao) {
            try {
                await deletarContato(item.id)

                alert(`Contato ${item.nome} foi deletado com sucesso!`)
            } catch {
                alert(`Aconteceu uma falha em deletar o contato ${item.nome}!`)
            }
        }
    }

    return (
        <ListItem>
            <Perfil>
                <PerfilImagem src={item.imagem} alt={item.nome} />
                <PerfilTitulo>{item.nome}</PerfilTitulo>
            </Perfil>
            <Telefone>{item.telefone}</Telefone>
            <Icones>
                <BotaoEditar to={`/editar/${item.id}`}>
                    <img src={editIcon} alt="Editar" />
                </BotaoEditar>
                <BotaoExcluir onClick={removerContato}>
                    <img src={deleteIcon} alt="Excluir" />
                </BotaoExcluir>
            </Icones>
        </ListItem>
    )
}

export default ItemDaLista
