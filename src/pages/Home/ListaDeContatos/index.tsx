import { useState, useEffect } from 'react'
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

const contatosIniciais: Contato[] = [
    {
        nome: 'moni',
        telefone: '21321312',
        imagem: 'https://fastly.picsum.photos/id/338/200/300.jpg?hmac=rE5P3WDLKY1VMpd9y_FLo_OKhTzG4_3zCbGjKvgOL5w',
        id: 1,
    },
]

type ContatosAgrupados = Record<string, Contato[]>

function ListaDeContatos() {
    const [contatosAgrupados, setContatosAgrupados] =
        useState<ContatosAgrupados>({})

    useEffect(() => {
        const agrupados = contatosIniciais.reduce<ContatosAgrupados>(
            (acumulador, contato) => {
                const primeiraLetra = contato.nome[0].toUpperCase()

                if (!acumulador[primeiraLetra]) {
                    acumulador[primeiraLetra] = []
                }

                acumulador[primeiraLetra].push(contato)

                return acumulador
            },
            {},
        )

        const agrupadosOrdenados = Object.keys(agrupados)
            .sort()
            .reduce<ContatosAgrupados>((acumulador, chave) => {
                acumulador[chave] = agrupados[chave].sort((a, b) =>
                    a.nome.localeCompare(b.nome),
                )
                return acumulador
            }, {})

        setContatosAgrupados(agrupadosOrdenados)
    }, [])

    return (
        <ContatosWrapper>
            {Object.keys(contatosAgrupados).length > 0 ? (
                Object.keys(contatosAgrupados).map((letra) => (
                    <ContatoGrupo key={letra}>
                        <ContatoTitulo>{letra}</ContatoTitulo>
                        <ContatoLista>
                            {contatosAgrupados[letra].map((contato) => (
                                <ItemDaLista key={contato.id} item={contato} />
                            ))}
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
