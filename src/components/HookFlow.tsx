import React, {ChangeEvent, useEffect, useState} from 'react';

const Child: React.FC = () => {
    console.log('--star to render child component')
    const [text, setText] = useState( ()=> {
        console.log('--Child useState initialized')
        return ''
    })
    ////////////////////////////////////////////////////////////////////////////
    useEffect(() => {
        console.log('--Child useEffect, no deps')
        return () => console.log('--Child useEffect [Cleanup], no deps')
    })
    useEffect(() => {
        console.log('--Child useEffect, empty deps')
        return () => console.log('--Child useEffect [Cleanup], empty deps')
    }, [])
    useEffect(() => {
        console.log('--Child useEffect, [text]')
        return () => console.log('--Child useEffect [Cleanup], [text]')
    })
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }
    const element = <>
        <input onChange={handleChange}/>
        <p>{text}</p>
    </>
    console.log('--end Child render')
    return element
}

const SecondChild: React.FC = () => {
    console.log('----second child')
    const [text, setText] = useState('')
    useEffect(() => {
        console.log('----second child useEffect, no deps')
        return () => console.log('----second child useEffect [Cleanup], no deps')
    })
    useEffect(() => {
        console.log('----second child useEffect, empty deps')
        return () => console.log('----second child useEffect [Cleanup], empty deps')
    }, [])
    useEffect(() => {
        console.log('----second child useEffect, [text]')
        return () => console.log('----second child useEffect [Cleanup], [text]')
    }, [text])
    const handleParentTextChange = (event: ChangeEvent<HTMLInputElement>) => setText(event.target.value)
    console.log('----end second child render')
    return <>
        SECOND CHILD
        <input value={text} onChange={handleParentTextChange}/>
    </>
}

const HookFlow: React.FC = () => {
    console.log('start to render HookFlow component')
    const [text, setText] = useState('')
    const [show, setShow] = useState(() => {
        console.log('setstate of show')
        return false
    })
    useEffect(() => {
        console.log('HookFlow useEffect, no deps')
        return () => console.log('HookFlow useEffect [Cleanup], no deps')
    })
    useEffect(() => {
        console.log('HookFlow useEffect, empty deps')
        return ()=> console.log('HookFlow useEffect [Cleanup], empty deps')
    }, [])
    useEffect(() => {
        console.log('HookFlow useEffect, [show]')
        return () => console.log('HookFlow useEffect [Cleanup], [show]')
    }, [show])
    const handleClick = () => setShow(prev => !prev)
    const handleParentTextChange = (event: ChangeEvent<HTMLInputElement>) => setText(event.target.value)
    console.log('end HookFlow render')
    return (
        <>
            <input value={text} onChange={handleParentTextChange}/>
            <button onClick={handleClick}>search</button>
            {show ? <Child/> :null}
            <div>
                <SecondChild/>
            </div>
        </>
    )
}

export default HookFlow