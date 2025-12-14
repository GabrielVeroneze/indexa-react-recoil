import { useMemo } from 'react'
import { useContatos } from '@/hooks/useContatos'
import type { Contato } from '@/types/Contato'
import styled from 'styled-components'
import ItemDaLista from './ItemDaLista'

const ContatoTitulo = styled.h2`
    border-bottom: 1px solid #0d6efd;
    margin-bottom: 16px;
`

const ContatosWrapper = styled.div`
    color: #0d6efd;
    max-width: 416px;
    width: 100%;
`

const ContatoGrupo = styled.div`
    margin-bottom: 24px;
`

const ContatoLista = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

type ContatosAgrupados = Record<string, Contato[]>

function ListaDeContatos() {
    const { contatos } = useContatos()

    const contatosAgrupados = useMemo(() => {
        return contatos.reduce<ContatosAgrupados>((acumulador, contato) => {
            const primeiraLetra = contato.nome[0].toUpperCase()

            if (!acumulador[primeiraLetra]) {
                acumulador[primeiraLetra] = []
            }

            acumulador[primeiraLetra].push(contato)

            return acumulador
        }, {})
    }, [contatos])

    const contatosAgrupadosOrdenados = useMemo(() => {
        return Object.keys(contatosAgrupados)
            .sort()
            .reduce<ContatosAgrupados>((acumulador, chave) => {
                acumulador[chave] = contatosAgrupados[chave].sort((a, b) =>
                    a.nome.localeCompare(b.nome),
                )
                return acumulador
            }, {})
    }, [contatosAgrupados])

    return (
        <ContatosWrapper>
            {Object.keys(contatosAgrupadosOrdenados).length > 0 ? (
                Object.keys(contatosAgrupadosOrdenados).map((letra) => (
                    <ContatoGrupo key={letra}>
                        <ContatoTitulo>{letra}</ContatoTitulo>
                        <ContatoLista>
                            {contatosAgrupadosOrdenados[letra].map(
                                (contato) => (
                                    <ItemDaLista
                                        key={contato.id}
                                        item={contato}
                                    />
                                ),
                            )}
                        </ContatoLista>
                    </ContatoGrupo>
                ))
            ) : (
                <p>Nenhum contato disponível.</p>
            )}
        </ContatosWrapper>
    )
}

export default ListaDeContatos
