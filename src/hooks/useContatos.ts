import { useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { contatosState } from '@/atoms/contatosState'
import { apiContatos } from '@/api/api'
import type { Contato } from '@/types/Contato'

export const useContatos = () => {
    const [contatos, setContatos] = useRecoilState(contatosState)

    const fetchContatos = useCallback(async () => {
        const dados = await apiContatos.resgatarContatos()

        setContatos(dados)
    }, [setContatos])

    const addContatos = async (contato: Contato) => {
        const novoContato = await apiContatos.criar(contato)

        setContatos((listaAntiga) => [...listaAntiga, novoContato])

        return novoContato
    }

    useEffect(() => {
        fetchContatos()
    }, [fetchContatos])

    return {
        contatos,
        fetchContatos,
        addContatos,
    }
}
