import React, {useEffect, useState} from "react";

export const useLocalStorage = (itemName: string, value: string = '') => {
    const [state, setState] = useState(() => {
        return window.localStorage.getItem(itemName) || value
    })
    useEffect(() => {
        window.localStorage.setItem(itemName, state)
    }, [state])
    return [state, setState] as const
}