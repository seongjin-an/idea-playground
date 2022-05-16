import React, {ChangeEvent} from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";

const CustomHook: React.FC = () => {
    console.log('render')
    const [keyword, setKeyword] = useLocalStorage('keyword')
    const [result, setResult] = useLocalStorage('result')
    const [typing, setTyping] = useLocalStorage('typing', 'false')
    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setKeyword(event.target.value)
        setTyping('true')
    }
    const handleClick = () => {
        setTyping('false')
        setResult(`we find results of ${keyword}`)
    }
    return (
        <>
            <input onChange={handleChange} value={keyword} />
            <button onClick={handleClick}>search</button>
            <p>{typing === 'true' ? `Looking for ${keyword}`: result}</p>
        </>
    )
}

export default CustomHook