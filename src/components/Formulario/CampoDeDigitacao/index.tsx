import type { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

const CampoWrapper = styled.div`
    margin-bottom: 16px;
`

const Label = styled.label`
    color: #212529;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 700;
    line-height: 27px;
`

const Input = styled.input`
    background-color: transparent;
    border: 1px solid #ced4da;
    color: #6c757d;
    font-family: Montserrat;
    font-size: 18px;
    line-height: 27px;
    padding: 7px 13px;
    width: 100%;

    &:focus {
        border-color: #0d6efd;
        outline: none;
    }
`

interface CampoDeDigitacaoProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

function CampoDeDigitacao({ id, label, ...props }: CampoDeDigitacaoProps) {
    return (
        <CampoWrapper>
            <Label htmlFor={id}>{label}</Label>
            <Input id={id} {...props} />
        </CampoWrapper>
    )
}

export default CampoDeDigitacao
