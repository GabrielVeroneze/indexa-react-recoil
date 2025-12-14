import { useCallback, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { contatosState } from '@/atoms/contatosState'
import { apiContatos } from '@/api/api'

export const useContatos = () => {
    const [contatos, setContatos] = useRecoilState(contatosState)

    const fetchContatos = useCallback(async () => {
        const dados = await apiContatos.resgatarContatos()
        setContatos(dados)
    }, [setContatos])

    useEffect(() => {
        fetchContatos()
    }, [fetchContatos])

    return {
        contatos,
        fetchContatos,
    }
}
