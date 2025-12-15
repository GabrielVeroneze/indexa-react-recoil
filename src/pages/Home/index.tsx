import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router'
import { pesquisaState } from '@/atoms/contatosState'
import styled from 'styled-components'
import Wrapper from '@/components/Wrapper'
import Header from '@/components/Header'
import contact from '@/assets/contacts.png'
import BarraDePesquisa from './BarraDePesquisa'
import BotaoAdicionar from './BotaoAdicionar'
import ListaDeContatos from './ListaDeContatos'

const ImagemContato = styled.img`
    margin: 0 auto;
    width: 250px;
`

const Titulo = styled.h1`
    border-bottom: 1px solid #0d6efd;
    color: #0d6efd;
    font-family: Zen Dots;
    font-size: 26px;
    font-weight: 400;
    line-height: 39px;
    padding-bottom: 24px;
    text-align: center;

    span {
        color: #fd9843;
    }
`

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    gap: 40px;
    min-width: 416px;
`

function Home() {
    const navigate = useNavigate()
    const [search, setSearch] = useRecoilState(pesquisaState)

    return (
        <Wrapper>
            <Header />
            <MainContainer>
                <ImagemContato
                    src={contact}
                    alt="Contatos"
                    className="imagem-contato"
                />
                <Titulo>
                    Organize, <span className="titulo-destaque">conecte,</span>{' '}
                    simplifique!
                </Titulo>
                <BarraDePesquisa onSearch={(e) => setSearch(e.target.value)} />
                <BotaoAdicionar onClick={() => navigate('/cadastro')} />
                <ListaDeContatos />
            </MainContainer>
        </Wrapper>
    )
}

export default Home
