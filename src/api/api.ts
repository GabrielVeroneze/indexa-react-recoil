import type { Contato } from '@/types/Contato'
import type { DadosForm } from '@/types/DadosForm'

const baseURL = 'http://localhost:3001/contatos'

function tratarResposta(resposta: Response) {
    if (!resposta.ok) {
        throw new Error(
            `Erro na requisição: ${resposta.status} ${resposta.statusText}`,
        )
    }
    return resposta.json()
}

export const apiContatos = {
    async resgatarContatos(): Promise<Contato[]> {
        try {
            const resposta = await fetch(baseURL)
            return tratarResposta(resposta)
        } catch {
            throw new Error('Erro ao buscar contatos')
        }
    },

    async criar(contato: DadosForm): Promise<Contato> {
        try {
            const resposta = await fetch(baseURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contato),
            })
            return tratarResposta(resposta)
        } catch {
            throw new Error('Erro ao criar contato')
        }
    },

    async atualizar(id: number, contato: Contato): Promise<Contato> {
        try {
            const resposta = await fetch(`${baseURL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contato),
            })
            return tratarResposta(resposta)
        } catch {
            throw new Error('Erro ao atualizar contato')
        }
    },

    async deletar(id: number): Promise<void> {
        try {
            const resposta = await fetch(`${baseURL}/${id}`, {
                method: 'DELETE',
            })
            return tratarResposta(resposta)
        } catch {
            throw new Error('Erro ao deletar contato')
        }
    },
}
