import { useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { contatosState } from '@/atoms/contatosState'
import { apiContatos } from '@/api/api'
import type { DadosForm } from '@/types/DadosForm'

export const useContatos = () => {
    const [contatos, setContatos] = useRecoilState(contatosState)

    const fetchContatos = useCallback(async () => {
        const dados = await apiContatos.resgatarContatos()

        setContatos(dados)
    }, [setContatos])

    const addContatos = async (contato: DadosForm) => {
        const novoContato = await apiContatos.criar(contato)

        setContatos((listaAntiga) => [...listaAntiga, novoContato])

        return novoContato
    }

    const atualizarContato = async (id: number, contato: DadosForm) => {
        const contatoAtualizado = await apiContatos.atualizar(id, contato)

        setContatos((listaAntiga) =>
            listaAntiga.map((contatoDaLista) =>
                contatoDaLista.id === id ? contatoAtualizado : contatoDaLista,
            ),
        )

        return contatoAtualizado
    }

    useEffect(() => {
        fetchContatos()
    }, [fetchContatos])

    return {
        contatos,
        fetchContatos,
        addContatos,
        atualizarContato,
    }
}
