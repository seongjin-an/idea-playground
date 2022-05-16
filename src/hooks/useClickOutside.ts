import {RefObject, useEffect} from "react";

const useClickOutside = (ref: RefObject<HTMLElement>, callback: (event: Event) => void) => {
    console.log('render....')
    useEffect(() => {
        const listener = (e: Event) => {
            console.log('ref:', ref, ' / event:', e)
            if(!ref.current){
                console.log('!ref.current: true')
            }else{
                console.log('!ref.current: false')
            }
            if(ref.current?.contains(e.target as Node)){
                console.log('ref.current?.contains(e.target as Node): true')
            }
            if(!ref.current || ref.current.contains(e.target as Node)){
                console.log('!ref.current || ref.current.contains(e.target) : true')
                return;
            }
            callback(e)
        }
        document.addEventListener('mousedown', listener)
        document.addEventListener('touchstart', listener)
        return () => {
            console.log('unmount')
            document.removeEventListener('mousedown',listener)
            document.removeEventListener('touchstart', listener)
        }
    }, [ref, callback])
}
export default useClickOutside