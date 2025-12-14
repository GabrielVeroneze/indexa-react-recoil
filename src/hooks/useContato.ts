import { useRecoilState } from 'recoil'
import { contatosState } from '@/atoms/contatosState'
import { apiContatos } from '@/api/api'

export const useContato = () => {
    const [contatos, setContatos] = useRecoilState(contatosState)

    const fetchContatos = async () => {
        const dados = await apiContatos.resgatarContatos()

        setContatos(dados)
    }

    return {
        contatos,
        fetchContatos,
    }
}
