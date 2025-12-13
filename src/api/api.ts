import type { Contato } from '@/types/Contato'

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
    resgatarContatos() {
        return fetch(baseURL)
            .then(tratarResposta)
            .catch(() => {
                throw new Error('Erro ao buscar contatos')
            })
    },

    criar(contato: Contato) {
        return fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contato),
        })
            .then(tratarResposta)
            .catch(() => {
                throw new Error('Erro ao criar contato')
            })
    },

    atualizar(id: number, contato: Contato) {
        return fetch(`${baseURL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contato),
        })
            .then(tratarResposta)
            .catch(() => {
                throw new Error('Erro ao atualizar contato')
            })
    },

    deletar(id: number) {
        return fetch(`${baseURL}/${id}`, {
            method: 'DELETE',
        })
            .then(tratarResposta)
            .catch(() => {
                throw new Error('Erro ao deletar contato')
            })
    },
}
