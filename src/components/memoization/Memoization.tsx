import React, { ChangeEvent, useCallback, useMemo, useRef, useState } from 'react'
import { IUser, ICreateUserProps, IUsersProps, IUserProps } from './type'
import { CreateUserMemo } from "./CreateUser";
import {UserList, UserListMemo} from "./UserList";
import {countActiveUsers} from "./utils";

const Memoization: React.FC = () => {
    console.log('render Memoization component')
    const [ inputs, setInputs ] = useState<{ username: string, email: string }>({ username: '', email: '' })
    const { username, email } = inputs

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setInputs(inputs => ({...inputs, [name]: value}))
    },[])

    const [ users, setUsers ] = useState<IUser[]>([
        {
            id: 1,
            username: 'ansj',
            email: 'ansj@ansj.com',
            active: true,
        },
        {
            id: 2,
            username: 'ansj2',
            email: 'ansj2@ansj2.com',
            active: false,
        },
        {
            id: 3,
            username: 'ansj3',
            email: 'ansj3@ansj3.com',
            active: false,
        }
    ])

    const nextId = useRef<number>(4)
    const onCreate = useCallback(() => {
        const user: IUser = {
            id: nextId.current,
            username,
            email,
            active: false
        }
        setUsers(users => users.concat(user))
        setInputs({
            username: '',
            email: ''
        })
        nextId.current +=1
    }, [username, email])

    const onRemove = useCallback((id: number) => {
        setUsers(users => users.filter(user => user.id !== id))
    }, [])

    const onToggle = useCallback((id: number) => {
        setUsers(users => users.map(user => user.id === id ? { ...user, active: !user.active } :user ))
    }, [] )

    //useMemo: 값을 재활용!
    const count = useMemo(() => countActiveUsers(users), [users])
    return(
        <>
            <CreateUserMemo username={username} email={email} onChange={onChange} onCreate={onCreate} />
            <UserListMemo users={users} onRemove={onRemove} onToggle={onToggle}/>
            <div>활성 사용자 수: {count}</div>
        </>
    )
}

export default Memoization