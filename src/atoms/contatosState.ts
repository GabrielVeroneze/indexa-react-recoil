import { atom } from 'recoil'
import type { Contato } from '@/types/Contato'

export const contatosState = atom<Contato[]>({
    key: 'contatosState',
    default: [],
})
