import React, {useEffect, useRef, useState} from "react";

const useForceUpdate = () => {
    const [_, render] = useState(0)
    return () => render(i => i + 1)
}

const ForceRender: React.FC = () => {
    console.log('I AM RENDERING')
    const forceUpdate = useForceUpdate()
    const [num, setNum] = useState<number>(0)
    const count = useRef<number>(1)
    const [flag, setFlag] = useState<boolean>(false)

    // useEffect(() => {
    //     count.current++
    //     forceUpdate()
    // }, [num])
    const handleClickNum = () => {
        count.current++
        setNum(prevState => prevState + 1)
        // forceUpdate()
    }
    // useEffect(() => {
    //     count.current++
    // },[num])
    return (
        <>
            <p>num: {num} / count: {count.current} / flag: {flag ? 'true' : 'false'}</p>
            <button onClick={handleClickNum}>render</button>
            <button onClick={() => setFlag(prevState => !prevState)}>flag render button</button>
        </>
    )
}

export default ForceRender