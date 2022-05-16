import React, {ChangeEvent, useRef, useState} from "react";
import styled from "@emotion/styled/macro";
import useClickOutside from "../hooks/useClickOutside";

const Base = styled.div`
`

const Container = styled.div``

const Wrapper = styled.div``

const Input = styled.input``

const Header: React.FC = () => {

    const [keyword, setKeyword] = useState<string>('')

    const ref = useRef<HTMLDivElement>(null)
    const pathname = window.location.pathname
    console.log('pathname:', pathname)

    useClickOutside(ref, (event) => {
        setKeyword('')
    })

    const handleChangeKeyword = (event: ChangeEvent<HTMLInputElement>): void => {
        setKeyword(event.target.value)
    }

    return (
        <Base>
            <Container>
                <Wrapper ref={ref}>
                    <Input value={keyword} onChange={handleChangeKeyword}/>
                </Wrapper>
            </Container>
        </Base>
    )
}

export default Header