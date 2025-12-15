import { atom, selector } from 'recoil'
import type { Contato } from '@/types/Contato'

export const contatosState = atom<Contato[]>({
    key: 'contatosState',
    default: [],
})

export const pesquisaState = atom<string>({
    key: 'pesquisaState',
    default: '',
})

export const contatosFiltradosSelector = selector({
    key: 'contatosFiltradosSelector',
    get: ({ get }) => {
        const pesquisa = get(pesquisaState).toLowerCase()
        const contatos = get(contatosState)

        return contatos.filter((contato) =>
            contato.nome.toLowerCase().includes(pesquisa),
        )
    },
})
